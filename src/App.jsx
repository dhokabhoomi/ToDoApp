import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Todo from "./components/Todo";
import Errors from "./components/Errors";

const App = () => {
  return (
    <div className="d-grid py-4 min-vh-100">
      <Errors>
        <Todo />
      </Errors>
    </div>
  );
};

export default App;
