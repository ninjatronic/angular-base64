'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'dev/src/js/**/*.js'],
            options: {
                bitwise: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                evil: true,
                forin: true,
                globalstrict: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                trailing: true,
                undef: true,
                unused: true,

                camelcase: true,
                indent: 4,
                quotmark: 'single',

                globals: {
                    // Angular
                    angular: false,

                    // Grunt
                    module: false,

                    // Facebook
                    FB: false,

                    // document
                    document: false
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/<%= pkg.name %>.js'],
                dest: 'src/<%= pkg.name %>.min.js'
            }
        },
        uglify: {
            src: {
                files: {
                    'src/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.min.js']
                }
            }
        },
        watch: {
            hint: {
                files: ['Gruntfile.js', 'dev/**/*.*'],
                tasks: ['jshint']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-strip');

    grunt.registerTask('build', ['concat', 'uglify:src']);
    grunt.registerTask('default', ['watch:hint']);
};