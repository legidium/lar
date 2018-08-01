import React from 'react';

const TodoFilter = ({onToggle}) => (
  <div className="text-right">
    <label>
      <input
        className="toggle-view-completed"
        type="checkbox"
        onChange={onToggle}
      />
      <span> Скрыть выполненые</span>
    </label>
  </div>
);

export default TodoFilter;
