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
      <button onClick={handleAddButtonClick} className="plus-button">
        {newWorkspace ? "X" : "Add Workspace"}
      </button>

      {newWorkspace && (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Workspace Name"
          />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            name="color"
            placeholder="Color"
          />
          <button onClick={handleCreateButtonClick}> Create </button>
        </div>
      )}
    </div>
  );
}

export default NewWorkspace;
