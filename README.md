# WebExtension Experiment Shield Study Template
This is a spin-off of the Firefox Monitor Shield Study addon (https://github.com/mozilla/blurts-addon).
The idea is to capture a minimal template for studies that require the control and versatility of a bootstrap addon,
providing the basic shield study wrapper code and a simple mechanism to pass telemetry from the privileged context
to the Shield study WebExtension API.

The template also provides a basic directory structure and build setup (including eslint).

## Requirements
* Use an unbranded build for testing - see `https://wiki.mozilla.org/Add-ons/Extension_Signing#Unbranded_Builds`

## Setup
1. Fork the repo
2. Change add-on specific metadata in `package.json` and `src/manifest.json`
3. `$npm install`

## Running
1. `$export FIREFOX_BINARY=/path/to/unbranded/firefox/binary`
3. `$npm start`

## Building
`$npm run build`

## Under the hood
- This template implements a WebExtension Experiment API called `firefoxhooks`, accessible via `browser.firefoxhooks`.
- The API provides a simple event listener mechanism that allows passing objects from the privileged context to the extension context. See `gEventListener` in `background.js`.
- `Globals.jsm` is the entry point of the shared scope into which Firefox code is to be plugged in. `Globals.jsm` is loaded immediately upon addon installation from the `firefoxhooks API` implementation (`api.js`).
- `ChromeUtils.import` doesn't seem to work for resources that are packaged in an archive, so `Services.scriptloader.loadSubScript` is substituded everywhere. The imports are done in a way that `Globals.jsm`, `FirefoxHooks.jsm`, and `Experiment.jsm` all share the same global scope.
- `FirefoxHooks.jsm` implements the WEE API, and tells `Experiment.jsm` when to `init()` and `cleanup()`.
- The event mechanism is used in the template for Telemetry, but can easily be repurposed.
- Shield studies are not supposed to be re-installed after the add-on is disabled/uninstalled by the user. `FirefoxHooks.jsm` takes care of nuking the addon installation if this happens.
