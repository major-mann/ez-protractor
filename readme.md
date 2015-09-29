# A quick scaffold for protractor (Setup to run on non-angular site)
This is a scaffold that can be used to quickly get e2e testing up and running.

## Setup
1. Clone this repository
2. Install [node.js](https://nodejs.org/en/download/)
3. Run `npm install` from the project directory
4. Run `node_modules/.bin/webdriver-manager update`
5. Run `node_modules/.bin/webdriver-manager start`
6. Run `node_modules/.bin/protractor sample.config.js`

This will run the test found in `simple.spec.js`, which has been configured to run in `sample.config.js`

## Getting to know protractor

* Please check out the protractor [website](https://angular.github.io/protractor/#/) which has all the following links available on it.

* See this [tutorial](https://angular.github.io/protractor/#/tutorial) to learn a little about protractor (It is focused on angular, but the techniques can be applied elsewhere)

* If you want to add other browsers, check [this](https://angular.github.io/protractor/#/browser-setup) out.

