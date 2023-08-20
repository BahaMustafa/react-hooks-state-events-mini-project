import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.text} text={task.text} category={task.category} onDelete={onDelete} />
      ))}
    </div>
  );
}




export default TaskList;
