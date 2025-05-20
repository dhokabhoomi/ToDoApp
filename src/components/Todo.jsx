import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./TaskList";
import Header from "./Header";
import TodoInput from "./TodoInput";
import "./Todo.css";
import { useEffect, useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState(() => {
    // Try-catch to handle potential JSON parsing errors
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error);
      return [];
    }
  });

  // Update localStorage on task change
  const [storageError, setStorageError] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      setStorageError(null); // Clear previous errors
    } catch (e) {
      console.error("Storage error:", e);
      setStorageError(
        "Could not save tasks. Local storage quota may be exceeded."
      );
    }
  }, [tasks]);

  const addTask = (text, date, priority) => {
    const newTask = {
      id: Date.now(),
      text,
      date,
      priority,
      completed: false,
    };
    console.log("Adding new task:", newTask);
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    console.log("Deleting task with ID:", id);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTaskCompleted = (id) => {
    console.log("Toggling completion for task ID:", id);
    // Ensure we have a valid ID
    if (!id) {
      console.error("No task ID provided to toggleTaskCompleted");
      return;
    }

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        console.log(
          `Changing completion for task ${id} from ${
            task.completed
          } to ${!task.completed}`
        );
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    console.log("Updated tasks:", updatedTasks);
    setTasks(updatedTasks);
  };

  const editTask = (id, newText, newDate, newPriority) => {
    console.log("Editing task with ID:", id);
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, text: newText, date: newDate, priority: newPriority }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container-fluid p-0">
      {storageError && (
        <div className="alert alert-warning mt-3" role="alert">
          {storageError}
        </div>
      )}
      <div className="app-container py-4">
        <Header />
        <TodoInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleTaskCompleted={toggleTaskCompleted}
        />
      </div>
    </div>
  );
}

export default Todo;
