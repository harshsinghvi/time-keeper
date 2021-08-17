import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";

import "./App.css";
import Workspace from "./Workspace";
import NewWorkspace from "./NewWorkspace";

const sampleText = "Fuck JavaScript !!";
const sampleData = [
  { name: "One 9 Tech", color: "#2596be", text: sampleText },
  { name: "PingSafe Ai", color: "#0040ff", text: sampleText },
  { name: "Google Cloud", color: "#4080ec", text: sampleText },
];

function App() {
  const [appData, setAppData] = useState([]);
  const [cookies, setCookie] = useCookies(["app-data"]);

  useEffect(() => {
    if (cookies["app-data"] && cookies["app-data"].length)
      setAppData(cookies["app-data"]);
    else setCookie("app-data", sampleData);
  });

  console.log(cookies);

  const addWorkspace = (name, color) => {
    if (!name) return;
    const newWorkspace = { name, text: sampleText, color };
    appData.push(newWorkspace);
    setAppData(appData);
    setCookie("app-data", appData);
    console.log(newWorkspace);
  };

  const setText = (text, index) => {
    console.log(text, index);
    appData[index].text = text;
    setAppData(appData);
    setCookie("app-data", appData);
  };

  const deleteWorkspace = (index) => {
    appData.splice(index, 1);
    setAppData(appData);
    setCookie("app-data", appData);
    console.log(index);
  };

  console.log(cookies);
  return (
    <div className="App">
      <h1> Time Keeper</h1> <NewWorkspace addWorkspace={addWorkspace} />
      {appData &&
        appData.map((workspace, index) => (
          <Workspace
            setText={(value) => setText(value, index)}
            deleteWorkspace={() => deleteWorkspace(index)}
            color={workspace.color}
            name={workspace.name}
            textValue={workspace.text}
            key={index}
          />
        ))}
    </div>
  );
}

export default App;
