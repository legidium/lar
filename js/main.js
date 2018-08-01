var app = app || {};

(function() {
  'use strict';

  app.todoList = new app.TodoList();

  app.filter = new app.TodoFilterView();


  $(document).on('ready', function() {
    new app.AppView({});
  })

}());
