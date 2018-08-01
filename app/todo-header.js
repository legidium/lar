import React from 'react';

const TodoHeader = ({children}) => (
  <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
    {children}
  </div>
);

export default TodoHeader;
