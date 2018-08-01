var app = app || {};
(function() {
  app.TodoList = Backbone.Collection.extend({
    model: app.TodoItem,

    localStorage: new Backbone.LocalStorage('backbone-todo'),

    reOrder: function() {
      this.each( function(item, index) {
        item.set('order', index + 1)
      });
    }
  });
}())