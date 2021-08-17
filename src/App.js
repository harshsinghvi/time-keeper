import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";

import "./App.css";
import Workspace from "./Workspace";
import NewWorkspace from "./NewWorkspace";
import { sampleData, sampleText } from "./sampleData";

function App() {
  const [appData, setAppData] = useState([]);
  const [cookies, setCookie] = useCookies(["app-data"]);

  useEffect(() => {
    if (cookies["app-data"]) setAppData(cookies["app-data"]);
    else setCookie("app-data", sampleData);
  }, [cookies, setCookie]);

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

  const handleLoadSampleDataButtonClick = () => {
    setCookie("app-data", sampleData);
  };

  console.log(cookies);

  return (
    <div className="App">
      <h1 className="App-Heading"> Time Keeper</h1>
      {appData.length ? (
        appData.map((workspace, index) => (
          <Workspace
            setText={(value) => setText(value, index)}
            deleteWorkspace={() => deleteWorkspace(index)}
            color={workspace.color}
            name={workspace.name}
            textValue={workspace.text}
            key={index}
          />
        ))
      ) : (
        <button onClick={handleLoadSampleDataButtonClick}>
          Load Sample Data
        </button>
      )}
      <NewWorkspace addWorkspace={addWorkspace} />
    </div>
  );
}

export default App;
