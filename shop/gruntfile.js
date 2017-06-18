module.exports = function(grunt){
//Описываем конфигурацию
  grun.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          $: true,
          console: true,
        }

      },
      '<%= pkg.name %>': {
        src: [ 'static/js/**/*.js']
      }
    },
  });
  //Загружаем модули и плагины
  grunt.loadNpmTask('grunt-contrib-jshint');
  //Регистрируем задачу
  grunt.registerTask('Grunt_task', ['jshint']);
} ;