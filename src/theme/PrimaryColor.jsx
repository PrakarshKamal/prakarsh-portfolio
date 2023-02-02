import React from "react";
import { useThemeContext } from "../context/ThemeContext";

const PrimaryColor = ({ className }) => {
  const { handleTheme } = useThemeContext();
  return (
    <button
      className={className}
      onClick={() => handleTheme(className)}
    ></button>
  );
};

export default PrimaryColor;
