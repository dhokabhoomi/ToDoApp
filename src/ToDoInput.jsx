import { useState } from "react";

function ToDoInput({ setTasks, tasks }) {
  let [taskText, settaskText] = useState("");
  let [taskDate, settaskDate] = useState("");
  function addItem() {
    if (taskText && taskDate) {
      let task = [...tasks, { text: taskText, date: taskDate }];
      console.log(task);
      setTasks(task);
      settaskText("");
      settaskDate("");
    }
  }

  return (
    <div className="input-container py-4 mb-4">
      <h4 className="input-title">Add New Task</h4>
      <div className="row g-2">
        <div className="col-sm-3">
          <input
            type="text"
            className="form-control input-text"
            placeholder="Task Name"
            value={taskText}
            onChange={(e) => settaskText(e.target.value)}
          />
        </div>
        <div className="col-sm-3">
          <input
            type="date"
            className="form-control input-date"
            value={taskDate}
            onChange={(e) => settaskDate(e.target.value)}
          />
        </div>
        <div className="col-sm-2 d-flex justify-content-center">
          <button className="btn btn-success add-btn" onClick={addItem}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoInput;
