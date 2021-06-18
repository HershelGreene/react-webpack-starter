import React from "react";
import Tab from "./Tab";

const Tabs = ({ tabItems }) => {
  return tabItems.map((tabItem) => (
    <Tab key={tabItem.id} link={tabItem.link} title={tabItem.title} />
  ));
};

export default Tabs;
