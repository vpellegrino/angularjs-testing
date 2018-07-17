module.exports = function (grunt) {

    require('jit-grunt')(grunt);

    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            continuous: {
                singleRun: true,
                browsers: ['PhantomJS'],
                reporters: ['spec', 'junit', 'html'],
                junitReporter: {
                    outputDir: 'specs/results',
                    suite: 'AngularJS sample application'
                },
                htmlReporter: {
                    outputFile: 'specs/results/results.html'
                },
            },
            dev: {
            }
        }
    });

    grunt.registerTask('default', ['karma:continuous']);
};