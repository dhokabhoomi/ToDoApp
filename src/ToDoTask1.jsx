function ToDoTask1({ task, date }) {
  return (
    <div className="row mb-2">
      <div className="col-sm-5">{task}</div>
      <div className="col-sm-5">{date}</div>
      <div className="col-sm-2 d-flex">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}
export default ToDoTask1;
