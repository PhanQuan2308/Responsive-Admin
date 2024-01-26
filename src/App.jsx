import React from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";

const App = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <div>
          <Sidebar />
        </div>
        <div>
          <MainDash />
        </div>
      </div>
    </div>
  );
};

export default App;
