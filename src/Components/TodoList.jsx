import React, { useState } from 'react';
import tasksData from '../data/tasks';
import Column from './Column';

const TodoList = () => {
  const [tasks, setTasks] = useState(tasksData);

  const handleDrop = (e, newStatus) => {
    const taskId = parseInt(e.dataTransfer.getData('taskId'), 10);
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const columns = {
    todo: { title: 'To Do', status: 'todo' },
    'in-progress': { title: 'In Progress', status: 'in-progress' },
    review: { title: 'Review', status: 'review' },
    done: { title: 'Done', status: 'done' },
    closed: { title: 'Closed', status: 'closed' },
  };

  return (
    <div className="todo-list">
      {Object.keys(columns).map((columnKey) => (
        <Column
          key={columnKey}
          title={columns[columnKey].title}
          status={columns[columnKey].status}
          tasks={tasks.filter(task => task.status === columnKey)}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default TodoList;
