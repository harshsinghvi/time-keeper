import { useCookies } from "react-cookie";
import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Workspace from "./Workspace";

function App() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);

  const handle = () => {
    setCookie("Name", name, { path: "/" });
    setCookie("Password", pwd, { path: "/" });
  };

  const setText = (text, index) => {
    console.log(text, index);
  };

  const deleteWorkspace = (index) => {
    console.log(index);
  };

  console.log(cookies);
  return (
    <div className="App">
      <Workspace setText={setText} deleteWorkspace={deleteWorkspace} color="#2596be" name="One9 Tech"     />
      <Workspace setText={setText} deleteWorkspace={deleteWorkspace} color="#0040ff" name="PingSafe Ai"   />
      <Workspace setText={setText} deleteWorkspace={deleteWorkspace}  color="#4080ec" name="Google Cloud" />
    </div>
  );
}

export default App;
