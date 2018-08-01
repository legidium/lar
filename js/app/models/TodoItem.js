var app = app || {};
(function() {
  app.TodoItem = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false,
      date: '',
      order: '',
    },

    initialize: function() {
      var now = new Date();
      if (this.get('date').length === 0 ) {
        this.set('date', now.getDate() + '.' + (now.getMonth() + 1) + '.' +(now.getFullYear()) );
      }

      if (this.get('order').length === 0 ) {
        this.set('order', this.collection.length + 1 );
      }
    },

    toggleCompleted: function() {
      this.save({
        completed: !this.get('completed')
      });
    },
  });
}())
