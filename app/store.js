/* global app */

const store = app || {};

store.todoList = new app.TodoList();

store.todoList.create({title: 'Задача 1'});
store.todoList.create({title: 'Задача 2'});
store.todoList.create({title: 'Задача 3'});
store.todoList.create({title: 'Задача 4'});
store.todoList.create({title: 'Задача 5'});

export default store;
