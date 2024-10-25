import React from 'react';
import Task from './Task';

const Column = ({ title, tasks, status, onDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault();  // Allow drop
  };

  return (
    <div className="column" onDragOver={handleDragOver} onDrop={(e) => onDrop(e, status)}>
      <h3>{title}</h3>
      <div className="task-list">
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
