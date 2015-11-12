module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        watch: {
            options: {
                livereload: 'livereload: 35729',
                spawn: false
            },
            scripts: {
                files: ['app/**/*.js', 'public/**/*.html']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    // Default task(s).
    grunt.registerTask('serve', ['watch']);

};