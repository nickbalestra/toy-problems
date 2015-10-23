'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      src: [
        'Gruntfile.js',
        './src/**/*.js'
        // '<%= tape.files %>'
      ]
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/**/*.js']
    },

    // Configuration to be run (and then tested).
    speck: {
      tape: {
        options: {
          testFW: 'tape',
          specName: '_tapeSpec',
          logs: true
        },
        files: {
          'test/': ['src/**/*.js']
        }
      }
    },

    // Unit tests.
    tape: {
      options: {
        pretty: true,
        output: 'console'
      },
      files: ['test/**/*_tapeSpec.js']
    },

    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['build'],
        options: {
          spawn: false
        }
      }
    }
  });



  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-tape');
  grunt.loadNpmTasks('grunt-speckjs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean', 'speck', 'tape']);
  grunt.registerTask('test', ['eslint', 'build']);

};
