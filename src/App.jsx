import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./MyHeader";
import ToDoInput from "./ToDoInput";
import ToDoTask1 from "./ToDoTask1";
import "./style.css";
import { useState } from "react";

function App() {
  let [tasks, setTasks] = useState([
    { text: "Complete React project", date: "2025-02-28" },
    { text: "Study for interview", date: "2025-03-01" },
    { text: "Go grocery shopping", date: "2025-02-27" },
  ]);
  return (
    <>
      <div className="container app-container py-4">
        <Header />
        <ToDoInput tasks={tasks} setTasks={setTasks} />
        <ToDoTask1 tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
