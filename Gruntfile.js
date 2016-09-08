/// <binding />
module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          useAvailablePort: true,
          hostname: '127.0.0.1',
          keepalive: true,
          livereload: 35729,
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('start_server', ['connect:server']);

};