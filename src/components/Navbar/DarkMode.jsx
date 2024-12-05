import React from "react"; // Explicitly import React

import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = ({ theme, setTheme }) => {
  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => setTheme("light")} className="text-2xl cursor-pointer" />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl cursor-pointer" />
      )}
    </>
  );
};

export default DarkMode;
