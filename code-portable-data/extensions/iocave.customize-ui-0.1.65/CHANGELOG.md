# Change Log

All notable changes to the "customize-ui" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

## [0.1.65] - 2022-09-25

- Fix compatibility with VSCode 1.71.2

## [0.1.64] - 2022-09-14

- Fix compatibility with latest insiders

## [0.1.63] - 2022-08-05

- Remove node moduels from extension

## [0.1.62] - 2022-08-05

- Fix compability with latest vscode

## [0.1.61] - 2022-03-31

- Fix compability with latest vscode

## [0.1.60] - 2022-02-18

- Add option for `customizeUI.statusBarPosition`: `top`,
- Bugfixes

## [0.1.59] - 2022-02-17

- Fix compatiblity with latest insiders

## [0.1.58] - 2022-02-05

- Fix regression with activitybar: wide

## [0.1.57] - 2022-01-28

- Fix compatibility with latest insiders

## [0.1.56] - 2022-01-10

- Fix compatibility with latest insiders

## [0.1.55] - 2021-11-20

- Fix compatibility with latest insiders

## [0.1.54] - 2021-06-11

- Fix compatibility with latest insiders

## [0.1.53] - 2021-04-02

- Fixed regression introduced in PR [#80](https://github.com/iocave/customize-ui/issues/80)

## [0.1.52] - 2021-03-31

- Fix compatibility with latest insiders
- Merged PR [#80](https://github.com/iocave/customize-ui/issues/80) from YPetremann/master (Activity bar top + No move statusbar)

## [0.1.51] - 2021-02-15

- Fix compatibility with latest insiders
- Merged PR [#72](https://github.com/iocave/customize-ui/issues/72) (Add object type suppor) and [#69](https://github.com/iocave/customize-ui/issues/69) (fix vertical alignment of icons in explorer with custom `listRowHeight`)

## [0.1.50] - 2021-01-12

- Fix compabibility with latest insiders

## [0.1.49] - 2020-09-21

- Fix compabibility with latest insiders

## [0.1.48] - 2020-09-08

- Fixed empty debug view when debugging nodejs scripts
- Workaround for traffic light glitches when opening dialogs with Electron 9

## [0.1.47] - 2020-08-22

- Coffee prompt
- Better inline titlebar on electron 9

## [0.1.46] - 2020-07-10

- Fix compatibility with latest vscode

## [0.1.45] - 2020-06-29

- Fix compatibility with latest insiders

## [0.1.43] - 2020-06-23

- Fix compatibility with latest insiders

## [0.1.43] - 2020-06-02

- Fix compatibility with latest insiders

## [0.1.42] - 2020-05-27

- Looks like swizzle.dylib was not removed completely...

## [0.1.41] - 2020-05-27

- Remove swizzle.dylib completely as it causes problem with SIP enabled

## [0.1.40] - 2020-05-27

- Fix codesigning regression for swizzle.dylib

## [0.1.39] - 2020-05-24

- Fix compatibitity with latest insiders

## [0.1.38] - 2020-05-10

- Fix compatibility with latest insiders

## [0.1.37] - 2020-05-06

- Fix title action icons on linux (thanks to manuhornung)

## [0.1.36] - 2020-05-05

- Fix compatibility with latest insiders
- Add customizeUI.activityBarHideSettings option

## [0.1.34] - 2020-03-11

- Fix compatibility with latest insiders

## [0.1.33] - 2020-03-10

- Fix panel sizing when on right
- Fix scm providers view missing (#35)

## [0.1.32] - 2020-01-20

- Added support for frameless titlebar (thanks to Darren Prentice)
- Added workaround for broken window dragging after resize with electron 7

## [0.1.31] - 2019-12-23

- Added support for inline titlebar with tabs disabled

## [0.1.30] - 2019-12-20

- Tweaked badge position when having 'wide' activity bar

## [0.1.29] - 2019-12-18

- Add 'wide' setting for activity-bar to match width of traffic lights for inline menu bar (on macOS)

## [0.1.28] - 2019-12-16

- Fix christmas cap location in insider build
- Fix panel shrinking every window reload

## [0.1.27] - 2019-11-24

- Fix line height customizations for SCM panes

## [0.1.26] - 2019-11-21

- Fix compatibility with latest insider build

## [0.1.25] - 2019-11-17

- workbench.useExperimentalGridLayout is no longer required (the grid layout is now by default on in vscode)

## [0.1.24] - 2019-11-12

- Fix activity bar icon size

## [0.1.23] - 2019-10-24

- Fix activity bar style in latest insider build

## [0.1.22] - 2019-10-11

- Fix compatibility with latest insider build (electron 6)

## [0.1.21] - 2019-10-09

- Fix https://github.com/iocave/customize-ui/issues/8

## [0.1.20] - 2019-10-03

- Fix icon size
- Fix title bar double-click with latest insider build

## [0.1.19] - 2019-09-27

- Fix compatibility with latest insider build

## [0.1.18] - 2019-09-01

- Fix dragging of debug toolbar when inline titlebar is enabled
- Tweak icon sizes

## [0.1.16] - 2019-08-13

- Fix compatibility with latest insider build

## [0.1.16] - 2019-07-27

- Fix issues with workbench grid serialization when having activity bar at bottom (insider build)

## [0.1.15] - 2019-07-27

- Fix issues with workbench grid serialization when having activity bar at bottom (insider build)

## [0.1.14] - 2019-07-26

- Fix bug when extension repeatedly asks for restart
- Compatibility with latest insider builds

## [0.1.7] - 2019-06-06

- Initial release