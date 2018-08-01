var app = app || {};
(function() {
  app.TodoList = Backbone.Collection.extend({
    model: app.TodoItem,

    reOrder: function() {
      this.each( function(item, index) {
        item.set('order', index + 1)
      });
    },

    url: 'localStorage-collection',
  });

  _.extend(app.TodoList, Backbone.Events);

  app.TodoList.on('update', function(item) {
    console.log(item);
  });
}())
