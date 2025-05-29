import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

function TodoInput({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [priority, setPriority] = useState("");

  const handleAdd = () => {
    if (!taskText.trim()) {
      alert("Task name cannot be empty.");
      return;
    }
    if (taskText.length > 100) {
      alert("Task name is too long (max 100 characters).");
      return;
    }
    if (!taskDate.trim()) {
      alert("Please enter a due date.");
      return;
    }
    const selectedDate = new Date(taskDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDate.getTime())) {
      alert("Invalid date format.");
      return;
    }

    if (selectedDate < today) {
      alert("The due date cannot be in the past.");
      return;
    }
    if (!priority) {
      alert("Please select a priority.");
      return;
    }

    addTask(taskText, taskDate, priority);
    // Reset form fields after adding task
    setTaskText("");
    setTaskDate("");
    setPriority("");
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
  };

  return (
    <form
      className="input-container py-4 mb-4"
      onSubmit={handleSubmit}
      noValidate
    >
      <h4 className="input-title mb-3">Add New Task</h4>
      <div className="row g-3">
        <div className="col-lg-3 col-md-6 col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <input
            type="date"
            className="form-control"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
          />
        </div>
        <div className="col-lg-3 col-md-6 col-12 position-relative">
          <select
            className="form-control"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="" disabled>
              Select Priority
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <AiOutlineDown className="dropdown-icon" />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <button type="submit" className="btn add-btn w-100">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoInput;
