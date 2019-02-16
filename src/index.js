import React from "react";
import ReactDOM from "react-dom";
import PageTitle from "./components/PageTitle";
import ToDoList from "./components/ToDoList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PageTitle />
      <ToDoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
