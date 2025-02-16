// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./MyHeader";
import ToDoInput from "./ToDoInput";
import ToDoTask1 from "./ToDoTask1";
import ToDoTask2 from "./ToDoTask2";
import "./style.css";
import React from "react";


function App() {

  return (
    <React.Fragment>
      <center class="container">
        <Header/>
        <ToDoInput/>
        <ToDoTask1/>
        <ToDoTask2/>
      </center>
    </React.Fragment>
  )
}

export default App
