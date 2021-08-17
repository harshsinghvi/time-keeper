import React from "react";
import Stopwatch from "./Stopwatch";
import TodoList from "./TodoList";
import "./Workspace.css";

function Workspace(props) {
  return (
    <div className="Workspace">
      <div className="rowC">
        <Stopwatch name={props.name} nameColor={props.color} />
        <TodoList onTextChange />
      </div>
    </div>
  );
}

export default Workspace;
