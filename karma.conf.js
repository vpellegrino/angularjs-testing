module.exports = function (config) {

    config.set({
        preprocessors: {
            '**/*.spec.js': ['junit']
        },
        basePath: '',
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/**/*.js'
        ],
        reporters: ['spec', 'junit'],
        junitReporter: {
            outputFile: 'test-results.xml',
            suite: ''
        },
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        autoWatch: true,
        singleRun: true
    });

};
