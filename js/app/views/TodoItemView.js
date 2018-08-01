var app = app || {};
(function() {
  app.TodoItemView = Backbone.View.extend({
    className: 'd-table-row todo-item',

    events: {
      'click .edit-todo-item': 'edit',
      'click .delete-todo-item': 'delete',
      'click .save-changes': 'saveChanges',
      'change .toggle-completed': 'toggleCompleted',
    },

    template:  _.template( $('#todo-item-template').html() ),

    initialize: function() {
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "change:completed", this.toggleVisible);
      this.listenTo(app.filter, "toggleCompletedVisible", this.toggleVisible);
    },

    render: function() {
      this.$el.html( this.template( this.model.toJSON() ));
      return this;
    },

    edit: function() {
      this.$('.modal').modal();
    },

    saveChanges: function() {
      var newTitle = this.$('.new-title').val().trim();
      var newDate = this.$('.new-date').val().trim();

      if (newTitle.length && newDate.length) {
        this.model.save({
          title: newTitle,
          date: newDate
        });
      }
    },

    toggleVisible : function () {
      var completed = this.model.get('completed');
      var isHidden = completed && app.filter.hideCompleted;
      this.$el.toggleClass('d-none', isHidden).toggleClass('d-table-row', !isHidden);
    },

    toggleCompleted: function() {
      this.model.toggleCompleted();
    },

    delete: function() {
      this.model.destroy();
    },
  });
}())