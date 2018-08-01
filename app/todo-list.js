import React from 'react';
import Todo from './todo';
import {connectCollection} from './connectors';

const TodoList = ({
  collection = [],
  hideCompleted,
  onEdit,
  onToggle,
  onDelete
}) => (
  <div className="todo-list d-table text-center">
    {collection.map(model => !(hideCompleted && model.get('completed')) && (
        <Todo
          key={model.cid}
          model={model}
          onEdit={onEdit}
          onToggle={onToggle}
          onDelete={onDelete}
        />
    ))}
  </div>
);

export default connectCollection(TodoList);
