import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MainIndex from "./main";
import SecondPage from "./secondpage";
import ThirdPage from "./thirdpage";
import Preloader from "./preloader"; // Import the Preloader component

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

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
  const logoColor = useState();

  // useEffect(() => {
  //   theme === "dark"
  //     ? setTextColor("text-darkorange")
  //     : setTextColor("text-navlight");
  // }, [theme]);

  return (
    <div className="">
      {loading ? (
        <Preloader theme={theme} />
      ) : (
        <AnimatePresence>
          <MainIndex
            theme={theme}
            setTheme={setTheme}
            textColor={textColor}
            logoColor={logoColor}
          />
          <SecondPage
            theme={theme}
            setTheme={setTheme}
            textColor={textColor}
            logoColor={logoColor}
          />
          <ThirdPage
            theme={theme}
            setTheme={setTheme}
            textColor={textColor}
            logoColor={logoColor}
          />
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
