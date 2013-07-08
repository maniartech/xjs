/**
 * framework-factory
 * http://framework-factory.com/
 *
 * Copyright (c) 2013 Maniar Technologies Private Limited
 * Author Mohamed Aamir Maniar
 * Licensed under the MIT license.
 * https://framework-factory.com/LICENSE-MIT
 *
 **/

'use strict';

var src = [
        'src/x.begin.js',
        'src/x.js',
        'src/x.is.js',
        'src/x.string.js',
        'src/x.array.js',
        'src/x.objects.js',
        'src/x.collections.js',
        'src/x.end.js'
    ];

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        license: grunt.file.read('src/license.js'),
        concat: {
            options: {
                //separator: ';',
                banner: '<%= license %>'
            },
            main: {
                src: src,
                dest: 'lib/x.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= license %>'
            },
            main: {
                files: {
                    'lib/x.min.js': ['lib/x.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['concat'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Default task(s).
    grunt.registerTask('default', ['concat:main', 'uglify:main']);
};
