import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

// const UserTable = React.lazy(() => import("userManager/Table"));
const Peta = React.lazy(() => import("./Components/Peta.jsx"));
function App () {
  return (
    <div className="w-full h-full">
      <React.Suspense fallback="Loading...">
        <Peta />
      </React.Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
