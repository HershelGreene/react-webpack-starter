import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./Modules/Intro";
import "Assets/Styles/Root.scss";

const Root = () => {
  return (
    <Router>
      <Intro />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
