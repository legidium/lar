var app = app || {};
(function() {
  app.AppView = Backbone.View.extend({
    el: '#app',



    events: {

'click .create-new-todo-item': 'createTodoItem',
    },

    initialize: function() {
      app.todoList.fetch();

      this.addAll();
      this.$input = this.$('.new-todo-item-title');
      this.$toggleCheckbox = this.$('.toggle-view-completed');
      this.showCompleted = true;

      this.listenTo(app.todoList, 'add', this.addOne);
      this.listenTo(app.todoList, 'remove', this.addAll);
      this.listenTo(app.todoList, 'all', this.render);
    },

    addOne: function(item) {
      var view = new app.TodoItemView({model: item});
      $('.todo-list').append( view.render().el );
    },

    addAll: function() {
      this.$('.todo-item').detach('');
      app.todoList.each(this.addOne, this);
      app.todoList.reOrder();
    },



    createTodoItem: function() {

      var title = this.$input.val().trim();
      app.todoList.create({title: title});
      this.$input.val('');
    },
  });
}())
