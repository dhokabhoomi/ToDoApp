import { useState } from "react";
import TaskItems from "./TaskItems";

function TaskList({ tasks, deleteTask, editTask, toggleTaskCompleted }) {
  // const [sortByDate, setSortByDate] = useState(false);
  const [sortOption, setSortOption] = useState("original");

  // Check if all task dates are the same or missing
  const allDatesSame = (() => {
    const validDates = tasks
      .map((t) => t.date)
      .filter((d) => d && !isNaN(new Date(d).getTime()));
    if (validDates.length <= 1) return true;
    return validDates.every((d) => d === validDates[0]);
  })();

  // Sort based on selected option
  const sortedTasks =
    sortOption === "date" && !allDatesSame
      ? [...tasks].sort((a, b) => {
          if (!a.date) return 1;
          if (!b.date) return -1;
          return new Date(a.date) - new Date(b.date);
        })
      : tasks;

  return (
    <div className="task-container">
      <div className="task-list-header">
        <h2 className="task-list-title">Your Tasks</h2>
        {/* <button
          className="btn btn-outline-secondary"
          onClick={() => setSortByDate(!sortByDate)}
        >
          {sortByDate ? "Original Order" : "Sort by Due Date"}
        </button> */}
        <select
          className="form-select"
          style={{ width: "220px" }}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          disabled={allDatesSame}
        >
          <option value="original">Original Order</option>
          <option value="date">Sort by Due Date</option>
        </select>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state-wrapper">
          <div className="empty-state">No tasks yet. Add one!</div>
        </div>
      ) : (
        <div className="task-grid">
          {sortedTasks.map((task) => {
            console.log(`Creating TaskItem for task ID: ${task.id}`);
            return (
              <TaskItems
                key={task.id}
                task={task}
                deleteTask={() => {
                  console.log(`Delete called for task ID: ${task.id}`);
                  deleteTask(task.id);
                }}
                editTask={(newText, newDate, newPriority) => {
                  console.log(`Edit called for task ID: ${task.id}`);
                  editTask(task.id, newText, newDate, newPriority);
                }}
                toggleTaskCompleted={() => {
                  console.log(`Toggle called for task ID: ${task.id}`);
                  toggleTaskCompleted(task.id);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TaskList;
