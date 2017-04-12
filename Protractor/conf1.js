// var HTmlReporter= require('protractor-html-reporter');


exports.config = {
    directConnect: true,
    capabilities: {
      'browserName': 'chrome',
    },
    // framework:'jasmine',



    framework: 'jasmine2',

    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    // };

    // onPrepare: function() {
    //     var AllureReporter = require('jasmine-allure-reporter');
    //     jasmine.getEnv().addReporter(new AllureReporter({
    //         resultsDir: 'allure-results'
    //     }));

   // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['firstTest.js'],
    // Options to be passed to Jasmine.

    // onPrepare: function () {
    //     jasmine.getEnv().addReporter(new HTmlReporter({
    //         baseDirectory: 'C:/Users/thinksysuser/Desktop/new/report'
    //     }));
    //
    // }
    //
    // onPrepare: function() {
    //     var AllureReporter = require('../../index.js');
    //     jasmine.getEnv().addReporter(new AllureReporter({
    //         resultsDir: 'allure-results'
    //     }));
    // }

    // };

// };

// // An example configuration file.
// exports.config = {
//
//     directConnect: true,
// // Capabilities to be passed to the webdriver instance.
//     capabilities: {
//         'browserName': 'firefox'
//     },
//
// // Framework to use. Jasmine is recommended.
//     framework: 'jasmine2',
// // Options to be passed to Jasmine.
//     jasmineNodeOpts: {
//         defaultTimeoutInterval: 30000
//     },
//     onPrepare: function() {
//         var AllureReporter = require('jasmine-allure-reporter');
//         jasmine.getEnv().addReporter(new AllureReporter({
//             resultsDir: 'allure-results'
//         }));
//     },
//
//
// // Spec patterns are relative to the current working directory when
// // protractor is called.
//     specs: ['firstTest.js'],
//


// };
//
//
// exports.config = {
//     framework: 'jasmine2',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     specs: ['firstTest.js'],
//
//     capabilities: {
//         directConnect: true,
//         'browserName': 'chrome'
//     },
//
//     onPrepare: function() {
//         var AllureReporter = require('../../index.js');
//         jasmine.getEnv().addReporter(new AllureReporter({
//             resultsDir: 'allure-results'
//         }));
//     }
// };