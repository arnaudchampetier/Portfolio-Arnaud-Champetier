import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />

      <AllRoutes />
    </Router>
  );
}

export default App;
