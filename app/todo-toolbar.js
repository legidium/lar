import React from 'react';

const TodoToolbar = ({onFill, onClear}) => (
  <div className="d-flex flex-wrap justify-content-end mb-3">
    <div className="btn-toolbar">
      <div className="btn-group btn-group-sm">
        <button className="btn btn-outline-dark" onClick={onFill}>
          Добавить 1000
        </button>
        <button className="btn btn-outline-dark" onClick={onClear}>
          Очистить
        </button>
      </div>
    </div>
  </div>
);

export default TodoToolbar;
