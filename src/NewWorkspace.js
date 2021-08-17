import React, { useState } from "react";

import "./App.css";

function NewWorkspace(props) {
  const [newWorkspace, showNewWorkspace] = useState(false);
  const [name, setName] = useState();
  const [color, setColor] = useState();
  //props.addWorkspace
  const handleAddButtonClick = () => {
    if (newWorkspace) showNewWorkspace(false);
    else showNewWorkspace(true);
  };

  const handleCreateButtonClick = () => {
    props.addWorkspace(name, color);
    setName(null);
    setColor(null);
    showNewWorkspace(false);
  };

  return (
    <div>
      {newWorkspace && (
        <div className="newWorkspaceForm">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Workspace Name"
            style={{
              background: "#121212",
              color: "#b3b3b3",
              fontSize: "20px",
              border: "0.5px solid",
              margin: "5px"
            }}
          />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            name="color"
            placeholder="Color"
            style={{
              background: "#121212",
              color: "#b3b3b3",
              fontSize: "20px",
              border: "0.5px solid",
              margin: "5px"
            }}
          />

          <button onClick={handleCreateButtonClick}> Create </button>
        </div>
      )}
      <button onClick={handleAddButtonClick} className="plus-button">
        {newWorkspace ? "Close" : "Add Workspace"}
      </button>
    </div>
  );
}

export default NewWorkspace;
