import { useState } from "react";
import TaskItems from "./TaskItems";

function TaskList({ tasks, deleteTask, editTask, toggleTaskCompleted }) {
  const [sortByDate, setSortByDate] = useState(false);

  // Sort tasks by due date (ascending) or keep original order
  const sortedTasks = sortByDate
    ? [...tasks].sort((a, b) => {
        // Handle null or empty dates by pushing them to the end
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date) - new Date(b.date);
      })
    : tasks;

  return (
    <div className="task-container">
      <div className="task-list-header">
        <h2 className="task-list-title">Your Tasks</h2>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setSortByDate(!sortByDate)}
        >
          {sortByDate ? "Original Order" : "Sort by Due Date"}
        </button>
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
