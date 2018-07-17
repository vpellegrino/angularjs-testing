module.exports = function (config) {

    config.set({
        preprocessors: {
			'**/*.spec.js': ['junit']
        },
        basePath: '',
        files: [
            require.resolve('karma-fixture-loader'),
            {
                pattern: 'specs/fixture/*.json',
                watched: true,
                served: true,
                included: false
            }
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