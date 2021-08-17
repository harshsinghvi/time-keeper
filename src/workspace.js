import React from "react";
import "./Workspace.css";

function Workspace(props) {
  return (
    <div className="Workspace">
      Workspace Name: {props.name}
      <div className='rows'>
        <div className='row'> Div 1</div>
        <div className='row'> Div 2</div>
      </div>
    </div>
  );
}

export default Workspace;
