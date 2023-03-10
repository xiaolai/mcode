"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const os_1 = require("os");
const path = require("path");
const os = require("os");
class Configuration {
    constructor(pathManager) {
        this.browserModules = new Array();
        this.mainProcessModules = new Array();
        this.folderMap = {};
        this.pathManager = pathManager;
    }
    folderMapToString(indent, relative = false) {
        let entries = Object.entries(this.folderMap);
        entries = entries.sort((a, b) => a[0].localeCompare(b[0]));
        return entries.map(([key, value]) => `${indent}"${key}" : "${this.formatPath(this.expandHome(value), relative)}"`).join(",\n");
    }
    expandHome(p) {
        if (p.startsWith("~/")) {
            return path.join(os_1.homedir(), p.slice(2));
        }
        else {
            return p;
        }
    }
    formatPath(p, relative = false) {
        if (relative) {
            return path.relative(this.pathManager.installationPath, p).replace(/\\/g, '/');
        }
        else {
            if (os.platform() === "win32") {
                // There seems to be a weird bug in how AMD loader handles window URLs
                return "file://./" + p.replace(/\\/g, "/");
            }
            else {
                return p;
            }
        }
    }
    mainProcessModulesToString() {
        return this.filterModules(Array.from(this.mainProcessModules)).map((module) => `"${module}"`).join(", ");
    }
    browserModulesToString() {
        return this.filterModules(Array.from(this.browserModules)).map((module) => `"${module}"`).join(", ");
    }
    folderMapToRegexp() {
        let entries = Object.keys(this.folderMap);
        return entries.map((folder) => `^${folder}\\/`).join("|");
    }
    // Only include files that exist
    filterModules(modules) {
        return modules.filter((module) => {
            let segments = module.split("/");
            if (segments.length > 1) {
                if (this.folderMap[segments[0]] !== undefined) {
                    segments[0] = this.expandHome(this.folderMap[segments[0]]);
                }
            }
            let path = segments.join("/");
            return fs.existsSync(path + ".js");
        });
    }
    updateFolderMap(folderMap) {
        this.folderMap = folderMap;
    }
    updateMainProcessModules(modules) {
        this.mainProcessModules = modules;
    }
    updateBrowserModules(modules) {
        this.browserModules = modules;
    }
    writeMainProcessEntrypoint(path) {
        let data = `\
require.config({
    paths: {
${this.folderMapToString('        ')}
    }
});

define([${this.mainProcessModulesToString()}], function (){});`;
        return this.replaceFile(path, data);
    }
    writeBrowserEntrypoint(path) {
        let data = `\
'use strict';

function _monkeyPatch(bootstrapWindow) {

	const _prev = bootstrapWindow.load;

	bootstrapWindow.load = function(modulePaths, resultCallback, options) {

		let prevBeforeLoaderConfig = options.beforeLoaderConfig;
		options.beforeLoaderConfig = function(configuration, loaderConfig) {
			if (loaderConfig === undefined) {
				loaderConfig = configuration;
			}
			if (prevBeforeLoaderConfig && typeof prevBeforeLoaderConfig === 'function')
				prevBeforeLoaderConfig(configuration, loaderConfig);
			if (loaderConfig.amdModulesPattern !== undefined) {
				let prevPattern = loaderConfig.amdModulesPattern;
				let additionalPattern = /${this.folderMapToRegexp()}/;
				let joined = prevPattern.toString().slice(1, -1) + additionalPattern.toString().slice(1, -1);
				loaderConfig.amdModulesPattern = new RegExp(joined);
			}
			Object.assign(loaderConfig.paths, {
	${this.folderMapToString('\t\t\t', true)}
			});
			require.define("monkey-patch", {
				load: function (name, req, onload, config) {
					req([name], function (value) {
						req([${this.browserModulesToString()}], function() {
							onload(value);
						}, function(error) {
							console.error(error);
							onload(value);
						});
					});
				}
			});
		}
		if (modulePaths[0] == 'vs/workbench/workbench.main' ||
			modulePaths[0] == 'vs/workbench/workbench.desktop.main') {
			modulePaths[0] = 'monkey-patch!' + modulePaths[0];
		}
		return _prev(modulePaths, resultCallback, options);
	};
}

if (window.MonacoBootstrapWindow !== undefined) {
	_monkeyPatch(window.MonacoBootstrapWindow);
} else {
	Object.defineProperty(
		window,
		"MonacoBootstrapWindow", {
			set: function(value) { _monkeyPatch(value); window._monkeyPatchMonacoBootstrapWindow = value; },
			get: function() { return window._monkeyPatchMonacoBootstrapWindow;}
		}
	);
}

`;
        return this.replaceFile(path, data);
    }
    replaceFile(path, data) {
        if (fs.existsSync(path)) {
            let current = fs.readFileSync(path, "utf8");
            if (current === data) {
                return false;
            }
        }
        fs.writeFileSync(path, data, "utf8");
        return true;
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map