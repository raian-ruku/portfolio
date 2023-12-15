import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Button(props) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;

    const { height, width, left, top } = btnRef.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);

    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  useEffect(() => {
    if (btnRef.current) {
      const btn = btnRef.current;

      btn.onmousemove = function (e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;

        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
      };
    }
  }, []);

  useEffect(() => {
    if (btnRef.current) {
      const btn = btnRef.current;

      btn.onclick = function () {
        if (props.onClick) {
          props.onClick();
        }
      };
    }
  }, [props]);

  const hoverColor =
    props.textColor === "text-navlight"
      ? "hover:text-navlightdark"
      : props.textColor === "text-navlightdark"
      ? "hover:text-navlight"
      : props.textColor === "text-darkorange"
      ? "hover:text-dark"
      : props.textColor === "text-dark"
      ? "hover:text-darkorange"
      : "hover:text-red-500";
  const backgroundColor =
    props.textColor === "text-navlight"
      ? "before:bg-navlight"
      : props.textColor === "text-navlightdark"
      ? "before:bg-navlightdark"
      : props.textColor === "text-darkorange"
      ? "before:bg-darkorange"
      : props.textColor === "text-dark"
      ? "before:bg-dark"
      : "before:bg-red-500";
  // console.log("hc", hoverColor);
  // console.log("tc", textColor);
  // console.log("bc", backgroundColor);

  return (
    <motion.div
      ref={btnRef}
      className={`btn relative m-10  inline-flex overflow-hidden rounded-full bg-transparent px-4 py-1 tracking-widest before:absolute before:left-[var(--x)] before:top-[var(--y)] before:h-0 before:w-0 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full ${backgroundColor} ${hoverColor} select-none hover:before:h-[400px] hover:before:w-[400px]`}
      style={{ transition: "color 0.5s", position: "relative" }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
    >
      <span className="z-50">{props.text}</span>
    </motion.div>
  );
}

export default Button;
