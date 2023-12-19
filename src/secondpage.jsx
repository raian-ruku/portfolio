import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import NavBar from "./navbar";
import { Element } from "react-scroll";

function SecondPage(props) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // console.log("in view 2", isInView);
  }, [isInView]);

  const darkMode = localStorage.getItem("theme") === "dark";

  const textColor2 = darkMode ? "text-dark" : "text-navlightdark";
  const logoColor = darkMode ? "dark" : "navlightdark";

  return (
    <Element name="SecondPage">
      <motion.div
        ref={ref}
        className="body h-screen w-full bg-lightblack dark:bg-darkorange "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ transition: "background-color 1s" }}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {isInView && (
          <NavBar
            theme={props.theme}
            setTheme={props.setTheme}
            textColor={textColor2}
            logoColor={logoColor}
          />
        )}
      </motion.div>
    </Element>
  );
}

export default SecondPage;
