import { useState } from "react";

function ToDoInput({ setTasks, tasks }) {
  let [taskText, settaskText] = useState("");
  let [taskDate, settaskDate] = useState("");
  function addItem() {
    // let taskText = document.getElementById("todoInput").value;
    // let taskDate = document.getElementById("todoDate").value;

    if (taskText && taskDate) {
      // alert(`${taskText} added on ${taskDate}`);
      let task = [...tasks, { text: taskText, date: taskDate }];
      console.log(task);
      setTasks(task);
      settaskText("");
      settaskDate("");
    }
  }

  return (
    <div className="row mb-3">
      <div className="col-sm-5">
        <input
          type="text"
          className="form-control"
          placeholder="Task Name"
          value={taskText}
          onChange={(e) => settaskText(e.target.value)}
        />
      </div>
      <div className="col-sm-5">
        <input
          type="date"
          className="form-control"
          value={taskDate}
          onChange={(e) => settaskDate(e.target.value)}
        />
      </div>
      <div className="col-sm-2 d-flex">
        <button className="btn btn-success" onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ToDoInput;
