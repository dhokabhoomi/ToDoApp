import { useState } from "react";
import TaskItems from "./TaskItems";

function TaskList({ tasks, deleteTask, editTask, toggleTaskCompleted }) {
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
    <section className="task-container">
      <div className="task-list-header">
        <h2 className="task-list-title">Your Tasks</h2>
        <select
          className={`task-sort-dropdown ${
            allDatesSame ? "disabled-text" : ""
          }`}
          // style={{ width: "220px" }}
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
        <div className="task-grid" aria-label="Task-List">
          {sortedTasks.map((task) => {
            return (
              <TaskItems
                key={task.id}
                task={task}
                deleteTask={() => {
                  deleteTask(task.id);
                }}
                editTask={(newText, newDate, newPriority) => {
                  editTask(task.id, newText, newDate, newPriority);
                }}
                toggleTaskCompleted={() => {
                  toggleTaskCompleted(task.id);
                }}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default TaskList;
