import React from 'react';
import {connectModel} from "./connectors";

const Todo = ({model, onToggle, onEdit, onDelete}) => {
  const {id, order, title, date, completed} = model.attributes;
  return (
    <div className="d-table-row todo-item">
      <div className="d-table-cell p-3 border">{order}</div>
      <div className="d-table-cell p-3 border">{title}</div>
      <div className="d-table-cell p-3 border">{date}</div>
      <div className="d-table-cell p-3 border">
        <input
          type="checkbox"
          className="toggle-completed"
          checked={completed}
          onChange={() => onToggle(id)}
        />
      </div>
      <div className="d-table-cell p-3 border">
        <button className="btn btn-info edit-todo-item" onClick={() => onEdit(id)}>
          Редактировать
        </button>
        {' '}
        <button className="btn btn-danger delete-todo-item" onClick={() => onDelete(id)}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default connectModel(Todo);
