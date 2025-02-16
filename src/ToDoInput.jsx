function ToDoInput(){
    return(
        <div class="row mb-2">
            <div class="col-sm-5">
            <input type="text" class="form-control" />
            </div>
            <div class="col-sm-5">
                <input type="date" class="form-control" />
            </div>
            <div class="col-sm-2 d-flex">
                <button class="btn btn-success">Add</button>
            </div>
        </div>
    )
}
export default ToDoInput;