import React from 'react';

const TodoCreate = ({onCreate}) => (
  <form className="d-flex align-items-center" onSubmit={onCreate}>
    <input
      className="new-todo-item-title mr-3"
      placeholder="Создать задачу"
      name="title"
    />
    <button className="create-new-todo-item btn btn-primary" type="submit">
      Создать
    </button>
  </form>
);

export default TodoCreate;
