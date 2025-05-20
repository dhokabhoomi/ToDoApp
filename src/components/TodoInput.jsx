import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

function TodoInput({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [priority, setPriority] = useState("High");

  const handleAdd = () => {
    if (!taskText.trim()) {
      alert("Task name cannot be empty.");
      return;
    }
    if (taskText.length > 100) {
      alert("Task name is too long (max 100 characters).");
      return;
    }
    if (!taskDate.trim() || isNaN(new Date(taskDate).getTime())) {
      alert("Please enter a valid due date.");
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
    setPriority("High");
  };

  // Handle form submission with Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="input-container py-4 mb-4">
      <h4 className="input-title mb-3">Add New Task</h4>
      <div className="row g-3">
        <div className="col-lg-3 col-md-6 col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={handleKeyDown}
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
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <AiOutlineDown className="dropdown-icon" />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <button className="btn add-btn w-100" onClick={handleAdd}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
