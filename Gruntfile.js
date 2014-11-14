'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      dist: {
        files: {
          '../musikkglede/styles/main.min.css': [
            'less/app.less'
          ]
        },
        options: {
          compress: true
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '../musikkglede/js/scripts.min.js': [
            'js/scroll.js',
            'js/affix.js',
            'js/alert.js',
            'js/button.js',
            'js/carousel.js',
            'js/collapse.js',
            'js/dropdown.js',
            'js/modal.js',
            'js/tooltip.js',
			'js/popover.js',
            'js/scrollspy.js',
            'js/tab.js',
            'js/transition.js'            
          ]
        }
      }
    },
    watch: {
      less: {
        files: [
          'less/*.less',	
          'less/mixins/*.less'
        ],
        tasks: ['less']
      },
      js: {
        files: [		   
		   'js/*.js'
		],
        tasks: ['uglify']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.registerTask('default', [    
    'less',
    'uglify',
	'watch'
  ]);  
};