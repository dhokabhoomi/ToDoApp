import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
  function deleteTask(index) {
    let updatedList = tasks.filter((_, i) => i !== index);
    setTasks(updatedList);
  }
  function editTask(index, newText, newDate, newPriority) {
    let updatedTask = [...tasks];
    updatedTask[index] = {
      text: newText,
      date: newDate,
      priority: newPriority,
    };
    setTasks(updatedTask);
  }
  return (
    <div className="task-container py-4">
      <h4 className="task-list-title mb-3">My Tasks</h4>
      {tasks.length === 0 ? (
        <div className="empty-state p-5 text-center">
          <p>You have no tasks! Add one to get started.</p>
        </div>
      ) : (
        <div className="task-grid">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              index={index}
              task={task}
              deleteTask={() => deleteTask(index)}
              editTask={editTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default TaskList;
