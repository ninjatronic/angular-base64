'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ['build/'],
            temp: ['temp/']
        },
        copy: {
            build: {
                cwd: 'temp/',
                dest: 'build/',
                expand: true,
                src: ['<%= pkg.name %>.min.js']
            }
        },
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
        strip: {
            all: {
                src: 'temp/**/*.js',
                options: {
                    inline: true
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['dev/src/unmin/**/*.js'],
                dest: 'temp/<%= pkg.name %>.js'
            }
        },
        uglify: {
            src: {
                files: {
                    'temp/<%= pkg.name %>.min.js': ['temp/<%= pkg.name %>.js']
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

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-strip');

    grunt.registerTask('build', ['clean:temp', 'strip', 'concat', 'uglify:src', 'clean:build', 'copy:build', 'clean:temp']);
    grunt.registerTask('default', ['watch:hint']);
};