import { useState, useEffect } from "react";

function TaskItems({ task, deleteTask, editTask, toggleTaskCompleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [newDate, setNewDate] = useState(task.date);
  const [newPriority, setNewPriority] = useState(task.priority);

  // Reset form state when entering edit mode or when task changes
  const startEditing = () => {
    setNewText(task.text);
    setNewDate(task.date);
    setNewPriority(task.priority);
    setIsEditing(true);
  };

  // Update state when task prop changes
  useEffect(() => {
    setNewText(task.text);
    setNewDate(task.date);
    setNewPriority(task.priority);
  }, [task]);

  const handleEdit = (e) => {
    e.preventDefault();

    if (!newText.trim() || !newDate || !newPriority) {
      alert("Task name, due date, and priority are required");
      return;
    }
    editTask(newText, newDate, newPriority);
    setIsEditing(false);
  };

  // Format the date for display
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch (e) {
      console.error("Date formatting error:", e);
      return dateString;
    }
  };

  return (
    <div
      className="task-items"
      data-priority={task.priority}
      data-completed={task.completed}
    >
      {isEditing ? (
        <form className="edit-toggle" onSubmit={handleEdit}>
          <input
            type="text"
            className="form-control mb-2 input-text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            aria-label="Edit task name"
            required
          />
          <input
            type="date"
            className="form-control mb-2 input-date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            aria-label="Edit due date"
            required
          />
          <select
            className="form-control mb-2 input-priority"
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
            aria-label="Edit priority"
            required
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <div className="d-flex gap-3 mt-4">
            <button
              type="button"
              className="btn cancel-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn save-btn">
              Save
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="task-title">
            <div className="d-flex align-items-center flex-grow-1 me-3 task-text-container">
              <input
                className="form-check-input me-2"
                type="checkbox"
                checked={task.completed}
                onChange={() => {
                  toggleTaskCompleted(task.id);
                }}
                id={`task-${task.id}`}
                aria-checked={task.completed}
                aria-label={`Mark task "${task.text}" as completed`}
              />
              <label
                className="form-check-label task-text truncate-text"
                htmlFor={`task-${task.id}`}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  opacity: task.completed ? 0.7 : 1,
                }}
                title={task.text}
              >
                {task.text}
              </label>
            </div>
            <div className="task-priority" data-priority={task.priority}>
              {task.priority}
            </div>
          </div>
          <div className="task-date" title={`Due on ${task.date}`}>
            {formatDate(task.date)}
          </div>
          <div className="task-actions">
            <button
              className="btn edit-btn"
              onClick={startEditing}
              aria-label={`Edit task "${task.text}"`}
            >
              Edit
            </button>
            <button
              className="btn delete-btn"
              onClick={() => deleteTask(task.id)}
              aria-label={`Delete task "${task.text}"`}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItems;
