function ToDoInput() {
  function handleAddTask() {
    const taskInput = document.getElementById("taskInput").value;
    const taskDate = document.getElementById("dateInput").value;
    if (taskInput && taskDate) {
      alert(taskInput + " added on " + taskDate);
    }
  }
  return (
    <div className="row mb-2">
      <div className="col-sm-5">
        <input
          type="text"
          className="form-control"
          id="taskInput"
          placeholder="Task"
        />
      </div>
      <div className="col-sm-5">
        <input type="date" className="form-control" id="dateInput" />
      </div>
      <div className="col-sm-2 d-flex">
        <button className="btn btn-success" onClick={() => handleAddTask()}>
          Add
        </button>
      </div>
    </div>
  );
}
export default ToDoInput;
