function ToDoTask2({ task2 }) {
  return (
    <div className="row mb-2">
      <div className="col-sm-5">{task2}</div>
      <div className="col-sm-5">{task2}</div>
      <div className="col-sm-2 d-flex">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}
export default ToDoTask2;
