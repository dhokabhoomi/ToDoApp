import { useState } from "react";

function TaskItem({ task, index, deleteTask, editTask }) {
  let [isEditing, setIsEditing] = useState(false);
  let [newText, setNewText] = useState(task.text);
  let [newDate, setNewDate] = useState(task.date);
  let [newPriority, setNewPriority] = useState(task.priority);

  function handleEdit() {
    if (!newText.trim() || !newDate || !newPriority) {
      alert("Task name, duedate and priority are required");
      return;
    }
    editTask(index, newText, newDate, newPriority);
    setIsEditing(false);
  }

  return (
    <div className="task-items">
      {isEditing ? (
        <div className="edit-toggle">
          <input
            type="text"
            className="form-control mb-2 input-text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <input
            type="date"
            className="form-control mb-2 input-date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <select
            className="form-control mb-2 input-priority"
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button
            className="btn btn-primary mb-2 save-btn"
            onClick={handleEdit}
          >
            Save
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div className="task-details">
            <div className="task-text">{task.text}</div>
            <div className="task-date">{task.date}</div>
            <div className="task-priority">{task.priority}</div>
          </div>
          <div className="task-actions">
            <button
              className="btn btn-warning edit-btn me-2"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>
            <button className="btn btn-danger delete-btn" onClick={deleteTask}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default TaskItem;
