import React from 'react';
import TodoToolbar from './todo-toolbar';
import TodoHeader from './todo-header';
import TodoCreate from './todo-create';
import TodoFilter from './todo-filter';
import TodoList from './todo-list';
import TodoEdit from './todo-edit';

class App extends React.Component {
  state = {
    todoId: null,
    hideCompleted: false,
  };

  handleCreate = (e) => {
    const {store} = this.props;
    const {title: input} = e.currentTarget;
    const {value: title} = input;

    e.preventDefault();

    if (title) {
      store.todoList.create({title});
      input.value = '';
      input.focus();
    }
  };

  handleEdit = (todoId) => {
    this.setState(() => ({todoId}));
  };

  handleDelete = (id) => {
    const {store} = this.props;
    store.todoList.remove(id);
    store.todoList.reOrder();
  };

  handleFilter = (e) => {
    const {checked: hideCompleted} = e.currentTarget;
    this.setState(() => ({hideCompleted}));
  };

  handleToggle = (id) => {
    const {store} = this.props;
    const model = store.todoList.get(id);
    model.toggleCompleted();
  };

  handleFill = () => {
    const {store} = this.props;
    const offset = store.todoList.length + 1;
    for (let i = 0; i < 1000; i++) {
      store.todoList.create({title: `Задача ${offset + i}`});
    }
  };

  handleClear = () => {
    const {store} = this.props;
    store.todoList.reset();
  };

  handleSave = ({title, date}) => {
    if (title && date) {
      const {store} = this.props;
      const model = store.todoList.get(this.state.todoId);
      model.set({title, date});
    }
    this.setState(() => ({todoId: null}));
  };

  handleClose = () => {
    this.setState(() => ({todoId: null}));
  };

  renderToolbar() {
    return (
      <TodoToolbar
        onFill={this.handleFill}
        onClear={this.handleClear}
      />
    );
  }

  renderTodoHeader() {
    return (
      <TodoHeader>
        <TodoCreate onCreate={this.handleCreate} />
        <TodoFilter onToggle={this.handleFilter} />
      </TodoHeader>
    );
  }

  renderTodoList() {
    const {store} = this.props;
    const {hideCompleted} = this.state;
    return (
      <TodoList
        collection={store.todoList}
        hideCompleted={hideCompleted}
        onEdit={this.handleEdit}
        onToggle={this.handleToggle}
        onDelete={this.handleDelete}
      />
    );
  }

  renderTodoEdit() {
    const {todoId} = this.state;
    if (todoId) {
      const {store} = this.props;
      const {attributes} = store.todoList.get(todoId);
      return (
        <TodoEdit
          {...attributes}
          onSave={this.handleSave}
          onClose={this.handleClose}
        />
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderToolbar()}
        {this.renderTodoHeader()}
        {this.renderTodoList()}
        {this.renderTodoEdit()}
      </React.Fragment>
    );
  }
}

export default App;
