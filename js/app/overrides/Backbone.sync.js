(function() {
  'use strict';

  function s4() {
    const rand = (1 + Math.random()) * 0x10000;
    return (rand | 0).toString(16).substring(1);
  }
  function guid() {
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  function updateCollection(model, action) {
    var models = getCollection(model.collection);
    switch (action) {
      case 'add':
        models.push(model.id);
        break;
      case 'remove':
        var index = models.indexOf(model.id);
        models = models.slice(index, index+1);
        break;
    }
    models = models.join(',');
    localStorage.setItem(model.collection.url, models);
  }

  function getCollection(collection) {
    var models = localStorage.getItem(collection.url) || '';
    models = models.split(',').filter((item) => {return item.length});
    return models;
  }

  function create(model, success, error) {
    if (_.isUndefined(model.id) || model.id.length === 0) {
      model.set('id', guid());
    }
    localStorage.setItem(model.url(), JSON.stringify(model));

    updateCollection(model, 'add');

    success(find(model));
  }

  function update(model, success, error) {
    if (_.isUndefined(model.id) || model.id.length === 0) {
      error("Undefined 'id' of model");
      return;
    }
    localStorage.setItem(model.url(), JSON.stringify(model));
    success(find(model));
  }

  function destroy(model, success, error) {
    if (_.isUndefined(model.id) || model.get('id').length === 0) {
      error("Undefined 'id' of model");
      return;
    }
    localStorage.removeItem(model.url());

    updateCollection(model, 'remove');

    success(model);
  }

  function find(model, success, error) {
    if (_.isUndefined(model.id) || model.get('id').length === 0) {
      error("Undefined 'id' of model");
      return;
    }
    var result = localStorage.getItem(model.url());
    if (success) {
      success(result);
    }
  }

  function findAll(collection, success, error) {
    var models = getCollection(collection);

    var result = models.map( (id) => {
      var item = localStorage.getItem(collection.url + '/' + id);
      return JSON.parse(item);
    });

    success(result);
  }

  Backbone.sync = function(method, model, options) {
    function success(result) {
     if (options.success) {
       options.success(result);
     }
    }
    function error(result) {
      if (options.error) {
        options.error(result);
      }
    }

    options || (options = {});
    switch (method) {
      case 'create':
        return create(model, success, error);
      case 'update':
        return update(model, success, error);
      case 'patch':
        return update(model, success, error);
      case 'delete':
        return destroy(model, success, error);
      case 'read':
        if (model.get('id')) {
          return find(model, success, error);
        } else {
          return findAll(model, success, error);
        }
    }
  };
}());
