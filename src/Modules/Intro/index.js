import React from "react";
import useStyles from "./Styles";
import Logo from "Assets/Images/logo.png";

const Intro = () => {
  const classes = useStyles();

  return (
    <div className="d-flex justify-content-center flex-direction-column">
      <div className="d-flex align-self-center flex-direction-column">
        <h1 className={classes.title}>Welcome to React/Webpack Starter Kit</h1>
        <h5 className="text-center">
          This application is implemented without using CRA and in the most
          minimal way possible.
        </h5>
        <img src={Logo} />
      </div>
    </div>
  );
};

export default Intro;
