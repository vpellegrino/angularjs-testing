// Karma configuration
module.exports = function (config) {

    config.set({
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.spec.js': ['junit']
        },
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
        // list of files / patterns to load in the browser
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/**/*.js'
        ],
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'junit'],
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        junitReporter: {
            outputFile: 'test-results.xml',
            suite: ''
        },
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });

};
