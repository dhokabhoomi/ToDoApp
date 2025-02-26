import React from "react";

function ToDoTask1({ tasks, setTasks }) {
  function deleteTask(index) {
    let updatedList = tasks
      .map((task, i) => (i === index ? null : task))
      .filter((task) => task !== null);
    setTasks(updatedList);
  }
  if (!tasks || !Array.isArray(tasks)) {
    console.error("Tasks is not an Array: ", tasks);
    return <div>No Tasks available</div>;
  }
  return (
    <div className="Task-container">
      {tasks.map((task, index) => (
        <div key={index} className="row mb-2">
          <div className="col-md-5">{task.text}</div>
          <div className="col-md-5">{task.date}</div>
          <div className="col-sm-2 d-flex">
            <button
              className="btn btn-danger"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ToDoTask1;
