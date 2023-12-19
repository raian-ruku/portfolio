import React from "react";
import Button from "./button";
import Logo from "./logo";
import { Link } from "react-scroll";

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
      <Logo logoColor={props.logoColor} />
      <div className="right_components flex flex-row items-center justify-between ">
        <Link to="mainIndex" spy={true} smooth={true} duration={1000}>
          <Button text={"about"} textColor={props.textColor} />
        </Link>

        <Link to="SecondPage" spy={true} smooth={true} duration={1000}>
          <Button text={"projects"} textColor={props.textColor} />
        </Link>
        <Link to="ThirdPage" spy={true} smooth={true} duration={1000}>
          <Button text={"contact"} textColor={props.textColor} />
        </Link>
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
