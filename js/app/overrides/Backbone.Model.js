(function() {
  'use strict';

  _.extend(Backbone.Model.prototype, {
    url: function() {
      var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
      if (_.isUndefined(this.id) || this.id.length === 0) return base;
      return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + encodeURIComponent(this.id);
    }
  });
}());
