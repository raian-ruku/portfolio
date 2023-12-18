import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Preloader = ({ loading }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingTime, setLoadingTime] = useState(); // Set an initial loading time

  const pathVariants = {
    hidden: {
      pathLength: 0,
      strokeDasharray: "1 1",
    },
    visible: (custom) => ({
      pathLength: custom,
      strokeDasharray: "1 0",
    }),
  };

  const controls = useAnimation();

  useEffect(() => {
    const animatePath = async () => {
      await controls.start("visible");
    };

    animatePath();
  }, [controls]);

  useEffect(() => {
    const dynamicLoadingTime = calculateDynamicLoadingTime();
    setLoadingTime(dynamicLoadingTime);

    // Simulate loading progress incrementally
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => prevProgress + 1);
    }, dynamicLoadingTime * 10); // Adjust the interval based on your desired animation progress rate

    return () => clearInterval(interval);
  }, [loading]);

  const calculateDynamicLoadingTime = () => {
    // Implement your logic to determine dynamic loading time
    // For example, you can calculate based on API requests, assets loading, etc.
    return 2.5; // Default to 5 seconds if no specific logic is implemented
  };

  return (
    <motion.svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 613.64 73.42"
    >
      <motion.path
        className="cls-1"
        d="m99.23 32.77 7.03-20 9.73 28-29.35.04L101.02.5h11.46l25.11 69.8-6.08.01h-5.44l-7.57-19.5H83.16l-.38.95-7.29 18.55h13.06l3.44-10.63m113.85 0-3.44 10.63h-13.06l7.29-18.55.38-.95h35.34l7.57 19.5h5.43l6.09-.01L226.33.5h-11.46l-14.39 40.31 29.36-.04-9.73-28-7.03 20M159 .5h8.96v10.31h-9v59.54l9 .09V20.81m114.85 12.17v37.5h-10V.5h.93l38.33 70.09 13.74-.11V.5h-10v54.25L284.7 1.3m148.73 67.3c-7.84-2.07-14.58-10.4-14.89-23.41v-1.43L417.82.5h10l.7 43.26v3.75A13.45 13.45 0 0 0 442 61h.53v9.52h1.38c13.29 0 24.11-10.8 24.62-22.42V.5h-11v47.27c0 5.55-1.4 7.79-5.38 10M578 68.6c-7.84-2.07-14.57-10.4-14.88-23.41v-1.43L562.43.5h10l.71 43.26v3.75A13.45 13.45 0 0 0 586.6 61h.54v9.52h1.38c13.28 0 24.11-10.8 24.62-22.42V.5h-11v47.27c0 5.55-1.4 7.79-5.39 10m-86.97-10.8 18.92 23.47h12.36l-27.58-37.17L538.55.5h-13.32L500.9 32.3v38.1l-11 .04V.5h9v18.45M42.34 38.18a20.94 20.94 0 0 0 8.44-17c0-8.87-4.68-17.82-12.09-20.68H4.86v68.9h10.83v-34h.79L40.71 68l1 1.36h12.41L28 35.54h1.55a12.21 12.21 0 0 0 11.1-12.19c0-6.61-5-12-11.19-12H15.69v14m368.98 12.83a20.94 20.94 0 0 0 8.44-17c0-8.88-4.68-17.83-12.09-20.69h-33.84V69.4H358v-34h.78L383 68l1 1.36h12.37l-26.09-33.82h1.56a12.2 12.2 0 0 0 11.09-12.19c0-6.61-5-12-11.19-12H358v14"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={loadingProgress / 100} // Set the custom property for dynamic path length
        fill="none"
        stroke="black"
        transition={{ duration: loadingTime }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24"
        fill="black"
      >
        {loadingProgress}%
      </text>
    </motion.svg>
  );
};

export default Preloader;
