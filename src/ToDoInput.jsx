function ToDoInput() {
  return (
    <div className="row mb-2">
      <div className="col-sm-5">
        <input type="text" className="form-control" />
      </div>
      <div className="col-sm-5">
        <input type="date" className="form-control" />
      </div>
      <div className="col-sm-2 d-flex">
        <button className="btn btn-success">Add</button>
      </div>
    </div>
  );
}
export default ToDoInput;
