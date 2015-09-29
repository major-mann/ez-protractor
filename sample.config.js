exports.config = {
    // The address of a running selenium server.
    // This

    /**
    * This is the default address that the server will run on. You should not need to change this.
    *   Don't change this unless you know what you are doing and why you are doing it!
    */
    seleniumAddress: 'http://localhost:4444/wd/hub',

    /**
    * Here you can setup the browsers you want to test against.
    *   
    */
    multiCapabilities: [
        { 'browserName': 'firefox' },
        { 'browserName': 'chrome' }
    ],

    /**
    * Here you define which files contain your tests.
    *   You can define files individually, or using wildcards
    */
    specs: ['simple.spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
}