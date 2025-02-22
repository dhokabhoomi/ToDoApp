function ToDoInput() {
  function addItem() {
    let taskText = document.getElementById("todoInput").value;
    let taskDate = document.getElementById("todoDate").value;

    if (taskText.trim() && taskDate) {
      alert(`${taskText} added on ${taskDate}`);
    }
  }

  return (
    <div className="row mb-2">
      <div className="col-sm-5">
        <input
          type="text"
          className="form-control"
          placeholder="Task Name"
          id="todoInput"
        />
      </div>
      <div className="col-sm-5">
        <input type="date" className="form-control" id="todoDate" />
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
