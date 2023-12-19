import { motion, useInView } from "framer-motion";
import { Element } from "react-scroll";
import React, { useEffect, useRef } from "react";
import NavBar from "./navbar";

function ThirdPage(props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  // const [theme, setTheme] = useState(localStorage.getItem('theme'));
  // useEffect(() => {
  //   if (!localStorage.getItem('theme')) {
  //     localStorage.setItem('theme', 'light');
  //   }
  // }, [])

  // useEffect(() => {

  //   const storedDarkMode = localStorage.getItem('theme')
  //   // setTheme(storedDarkMode)

  //   if (storedDarkMode === 'dark') {
  //     document.documentElement.classList.add('dark')
  //   }
  //   else {
  //     document.documentElement.classList.remove('dark')
  //   }

  // }, [theme])

  useEffect(() => {
    // console.log("in view 1", isInView);
  }, [isInView]);

  // const textColor = theme ? 'text-darkorange' : "text-navlight"

  // const [textColor, setTextColor] = useState('text-navlight');

  // useEffect(() => {

  //   theme === 'dark' ? setTextColor('text-darkorange') : setTextColor("text-navlight")

  // }, [theme])

  const darkMode = localStorage.getItem("theme") === "dark";

  const textColor1 = darkMode ? "text-darkorange" : "text-navlight";
  const logoColor = darkMode ? "darkorange" : "navlight";
  return (
    <Element name="ThirdPage">
      <div
        ref={ref}
        className="overflow-x-hidden body  dark:bg-dark w-full h-screen bg-light "
        style={{ transition: "background-color 1s" }}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {isInView && (
          <NavBar
            theme={props.theme}
            setTheme={props.setTheme}
            textColor={textColor1}
            logoColor={logoColor}
          />
        )}
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </Element>
  );
}

export default ThirdPage;
