// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./MyHeader";
import ToDoInput from "./ToDoInput";
import ToDoTask1 from "./ToDoTask1";
// import ToDoTask2 from "./ToDoTask2";
import "./style.css";

function App() {
  let tasks = [
    { task: "Buy Groceries", date: "16/2/2025" },
    { task: "Complete Homework", date: "19/2/2025" },
  ];
  return (
    <>
      <center className="container">
        <Header />
        <ToDoInput />
        {tasks.map((task, index) => (
          <ToDoTask1 key={index} task={task.task} date={task.date} />
        ))}
      </center>
    </>
  );
}

export default App;
