import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import ToDoInput from "./ToDoInput";
import TaskList from "./TaskList";
import "./style.css";
import { useState } from "react";

function App() {
  let [tasks, setTasks] = useState([
    { text: "Complete React project", date: "2025-02-28", priority: "high" },
    { text: "Study for interview", date: "2025-03-01", priority: "low" },
    { text: "Go grocery shopping", date: "2025-02-27", priority: "medium" },
  ]);
  return (
    <>
      <div className="container app-container py-4">
        <Header />
        <ToDoInput tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
