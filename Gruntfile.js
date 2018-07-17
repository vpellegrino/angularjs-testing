module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');
    grunt.init({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            continuous: {
                singleRun: true,
                browsers: ['PhantomJS'],
                reporters: ['junit']
            }
        }
    });
    grunt.registerTask('default', ['karma:continuous']);
    
};
