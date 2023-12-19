import { motion, useInView } from "framer-motion";

import React, { useEffect, useRef } from "react";
import NavBar from "./navbar";
import { Element } from "react-scroll";

function MainIndex(props) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // console.log("in view 1", isInView);
  }, [isInView]);

  const darkMode = localStorage.getItem("theme") === "dark";

  const textColor1 = darkMode ? "text-darkorange" : "text-navlight";
  const logoColor = darkMode ? "darkorange" : "navlight";
  return (
    <Element name="mainIndex">
      <motion.div
        ref={ref}
        className="overflow-x-hidden body  dark:bg-dark w-full h-screen bg-light"
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
      </motion.div>
    </Element>
  );
}

export default MainIndex;
