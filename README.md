# MCode: Minimal visual studio code, portable

NOTE: Only tested on MacOS.

Downlad [Official Release of Visual Studio Code](https://github.com/microsoft/vscode/releases) and rename it to `mcode.app`, and put it into this folder, for example: `/Applications/mcode/mcode.app`.

## Installed Extensions
* Github Theme
* Customize UI
* Sublime Text Keymap and Settings Importer
* Leaper

## User Settings

```json
{
    /**
     * Minimal Code
     */
    "customizeUI.stylesheet": {
        ".decorationsOverviewRuler": "display: none;",
        ".editor-group-container .title *": "display: none;",
        ".editor-group-container .title": "pointer-events: none;",
        ".editor-group-container.empty": "-webkit-app-region: drag;",
        ".monaco-editor.scroll-decoration": "box-shadow: none;"
    },
    "customizeUI.titleBar": "inline",
    "debug.console.fontFamily": "SauceCodePro Nerd Font Mono",
    "debug.console.fontSize": 15,
    "debug.console.lineHeight": 36,
    "debug.toolBarLocation": "docked",
    "diffEditor.ignoreTrimWhitespace": false,
    "diffEditor.renderSideBySide": false,
    "editor.bracketPairColorization.enabled": false,
    "editor.colorDecorators": false,
    "editor.cursorStyle": "line-thin",
    "editor.fontFamily": "SauceCodePro Nerd Font Mono",
    "editor.fontWeight": "200",
    "editor.fontLigatures": true,
    "editor.fontSize": 18,
    "editor.formatOnSave": true,
    "editor.glyphMargin": false,
    "editor.gotoLocation.multipleDeclarations": "goto",
    "editor.gotoLocation.multipleDefinitions": "goto",
    "editor.gotoLocation.multipleImplementations": "goto",
    "editor.gotoLocation.multipleReferences": "goto",
    "editor.gotoLocation.multipleTypeDefinitions": "goto",
    "editor.guides.indentation": false,
    "editor.hideCursorInOverviewRuler": true,
    "editor.lineHeight": 36,
    "editor.lineNumbers": "off",
    "editor.matchBrackets": "near",
    "editor.minimap.enabled": false,
    "editor.occurrencesHighlight": false,
    "editor.renderLineHighlight": "none",
    "editor.renderWhitespace": "none",
    "editor.scrollbar.horizontalScrollbarSize": 8,
    "editor.scrollbar.verticalScrollbarSize": 8,
    "explorer.compactFolders": false,
    "explorer.decorations.badges": false,
    "explorer.openEditors.visible": 0,
    "git.enableSmartCommit": true,
    "git.confirmSync": false,
    "markdown.preview.markEditorSelection": false,
    "problems.decorations.enabled": false,
    "scm.diffDecorations": "none",
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.enableMultiLinePasteWarning": false,
    "terminal.integrated.fontSize": 15,
    "terminal.integrated.lineHeight": 1.85,
    "window.autoDetectColorScheme": true,
    "window.newWindowDimensions": "inherit",
    "window.title": "${rootName}",
    "window.titleBarStyle": "inline",
    "workbench.activityBar.visible": false,
    "workbench.colorTheme": "GitHub Dark Default",
    "workbench.editor.enablePreview": false,
    "workbench.editor.revealIfOpen": true,
    "workbench.editor.showTabs": false,
    "workbench.editor.untitled.hint": "hidden",
    "workbench.iconTheme": null,
    "workbench.list.horizontalScrolling": true,
    "workbench.preferredDarkColorTheme": "GitHub Dark Default",
    "workbench.preferredLightColorTheme": "GitHub Light Default",
    "workbench.startupEditor": "none",
    "workbench.statusBar.visible": false,
    "workbench.tips.enabled": false,
    "workbench.tree.indent": 16,
    "workbench.tree.renderIndentGuides": "none",
    "editor.inlineSuggest.enabled": true,
    "security.workspace.trust.startupPrompt": "never",
    "security.workspace.trust.enabled": false,
    "security.workspace.trust.emptyWindow": false,
    "editor.tabSize": 2
}
```

## Commandline: `mcode`

**Prerequisites**: 

1. Have Homebrew installed already. 
2. Have mcode stored as `/Applications/mcode/mcode.app`

```bash
ln -s /Applications/mcode/mcode.app/Contents/Resources/app/bin/code /opt/homebrew/bin/mcode
```

## Icons

Check out https://github.com/dhanishgajjar/vscode-icons.

![](https://github.com/dhanishgajjar/vscode-icons/raw/master/images/drag-drop.png)
