import React from "react";

import logo from "./logo.svg";
import "./App.scss";
import { HomePage } from "./component/HomePage/HomePage";
import { Resume } from "./component/Resume/Resume";
import { Cards } from "./component/Cards/Cards";
import { Contacts } from "./component/Contacts/Contacts";

function App() {
  return (
    <div>
      <HomePage />
      <Resume />
      <Cards />
      <Contacts />
    </div>
  );
}

export default App;
