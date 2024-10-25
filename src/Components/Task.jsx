import React from "react";

const Task = ({ task }) => {
  console.log(task.content);
  return (
    <div
      className="task"
      draggable="true"
      onDragStart={(e) => e.dataTransfer.setData("taskId", task.id)}
    >
      {task.content}
    </div>
  );
};

export default Task;
