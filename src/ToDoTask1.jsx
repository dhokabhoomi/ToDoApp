import React from "react";

function ToDoTask1({ tasks, setTasks }) {
  function deleteTask(index) {
    let updatedList = tasks
      .map((task, i) => (i === index ? null : task))
      .filter((task) => task !== null);
    setTasks(updatedList);
  }
  return (
    <div className="task-container py-4">
      <h4 className="task-list-title mb-3">My Tasks</h4>
      {tasks.length === 0 ? (
        <div className="empty-state p-5 text-center">
          <p>You have no tasks! Add one to get started.</p>
        </div>
      ) : (
        <div className="task-grid">
          {tasks.map((task, index) => (
            <div key={index} className="task-items">
              <div className="task-details">
                <div className="task-text">{task.text}</div>
                <div className="task-date">{task.date}</div>
              </div>
              <button
                className="btn btn-danger delete-btn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ToDoTask1;
