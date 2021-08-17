import { useCookies } from "react-cookie";
import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Workspace from "./workspace";

function App() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);

  const handle = () => {
    setCookie("Name", name, { path: "/" });
    setCookie("Password", pwd, { path: "/" });
  };
  console.log(cookies);
  return <div className="App">
    <Workspace name="one"/> 
    <Workspace name="one"/> 
    <Workspace name="one"/> 
  </div>;
}

export default App;
