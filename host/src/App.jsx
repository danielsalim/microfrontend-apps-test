import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./Components/Global/ErrorBoundary";

import "./index.scss";

// const UserTable = React.lazy(() => import("userManager/Table"));
const Peta = React.lazy(() => import("./Components/Peta.jsx"));
function App () {
  return (
    <div className="w-full h-full">
      <ErrorBoundary>
        <React.Suspense fallback="Loading...">
          <Peta />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
