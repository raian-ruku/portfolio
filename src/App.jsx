import MainIndex from "./main";
import SecondPage from "./secondpage";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("theme");
    // setTheme(storedDarkMode)

    if (storedDarkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // const textColor = theme ? 'text-darkorange' : "text-navlight"

  const textColor = useState();

  // useEffect(() => {
  //   theme === "dark"
  //     ? setTextColor("text-darkorange")
  //     : setTextColor("text-navlight");
  // }, [theme]);

  return (
    <div className="">
      <AnimatePresence>
        <MainIndex theme={theme} setTheme={setTheme} textColor={textColor} />
        <SecondPage theme={theme} setTheme={setTheme} textColor={textColor} />
      </AnimatePresence>
    </div>
  );
}

export default App;
