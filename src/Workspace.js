import React from "react";
import Stopwatch from "./Stopwatch";
import TodoList from "./TodoList";

import "./Workspace.css";
import 'font-awesome/css/font-awesome.min.css';

function Workspace(props) {
  return (
    <div className="Workspace">
      <div className="rowC">
        <Stopwatch name={props.name} nameColor={props.color} deleteWorkspace={props.deleteWorkspace} />
        <TodoList setText={props.setText} textValue={props.textValue}/>
      </div>
    </div>
  );
}

export default Workspace;
