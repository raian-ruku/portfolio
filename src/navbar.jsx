import React from "react";
import Button from "./button";

function NavBar(props) {
  const toggleDarkMode = () => {
    const newDarkMode = props.theme === "light" ? "dark" : "light";
    props.setTheme(newDarkMode);
    localStorage.setItem("theme", newDarkMode);
  };

  return (
    <div
      className={`${props.textColor} flex h-[50px] flex-row justify-between bg-transparent font-lubalin text-[25px] `}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <img className="bg-orange-500" alt="logo"></img>
      <div className="right_components flex flex-row items-center justify-between ">
        <Button text={"about"} textColor={props.textColor} />
        <Button text={"projects"} textColor={props.textColor} />
        <Button text={"contact"} textColor={props.textColor} />
        <Button
          text={"theme"}
          textColor={props.textColor}
          onClick={toggleDarkMode}
        />
      </div>
    </div>
  );
}

export default NavBar;
