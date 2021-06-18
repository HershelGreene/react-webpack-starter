import React from "react";
import { Redirect, useHistory } from "react-router-dom";

const Tab = ({ title, link }) => {
  const history = useHistory();
  const handleRedirect = () => history.push(link);
  return (
    <button className="btn-primary" onClick={handleRedirect}>
      {title}
    </button>
  );
};

export default Tab;
