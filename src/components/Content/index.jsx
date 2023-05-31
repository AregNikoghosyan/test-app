import React, { useContext } from "react";
import { NightModeContext } from "../NightMode";

const Content = () => {
  const { isNightMode } = useContext(NightModeContext); // boolean

  return (
    <div className={isNightMode ? "night-mode" : "day-mode"}>
      <h1>Content</h1>
      <p>This is the content area.</p>
    </div>
  );
};

export default Content;
