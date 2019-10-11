//Gruntfile.js: Grunt configuration file.
module.exports = function(grunt) {
    grunt.initConfig({
        run: {
            build: {
                "exec": "npm run build"
            }
        },
        watch: {
            "src": {
                "files": ["src/**/*.js"],
               "tasks":  ["run:build"]
            }
        }
    })

    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
