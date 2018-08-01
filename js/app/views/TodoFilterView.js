var app = app || {};
(function() {
  app.TodoFilterView = Backbone.View.extend({
    el: ".toggle-view-completed",

    events: {
     'click': 'toggleCompleted',
    },

    initialize: function() {
      this.hideCompleted = false;
    },

    toggleCompleted: function() {
      this.hideCompleted = this.$el.prop('checked');
      this.trigger('toggleCompletedVisible', this.hideCompleted);
    },
  });
}())