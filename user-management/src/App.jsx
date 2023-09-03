import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import UserTable from './components/UserTable';

const App = () => {
  return (
    <div className="w-full h-full">
      <UserTable/>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("app"));
