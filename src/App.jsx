import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Todo from "./components/Todo";
import Errors from "./components/Errors";

const App = () => {
  return (
    <main className="d-grid py-4 min-vh-100">
      <Errors>
        <Todo />
      </Errors>
    </main>
  );
};

export default App;
