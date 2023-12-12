import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import NavBar from './navbar';



function MainIndex() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [theme, setTheme] = useState(localStorage.getItem('theme'));


  useEffect(() => {

    const storedDarkMode = localStorage.getItem('theme')
    // setTheme(storedDarkMode)

    if (storedDarkMode === 'dark') {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }

  }, [theme])

  useEffect(() => {

    // console.log("in view 1", isInView);
  }, [isInView])


  // const textColor = theme ? 'text-darkorange' : "text-navlight"

  const [textColor, setTextColor] = useState('text-navlight');

  useEffect(() => {

    theme === 'dark' ? setTextColor('text-darkorange') : setTextColor("text-navlight")

  }, [theme])





  return (
    <div ref={ref} className='body  scroll-smooth overflow-x-hidden dark:bg-dark' style={{ transition: 'background-color 1s' }}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {isInView && <NavBar theme={theme} setTheme={setTheme} textColor={textColor} />}
      <motion.div className=' w-full bg-light h-screen  ' initial={{ opacity: 0 }} transition={{ duration: 1 }}></motion.div>


    </div>
  )
}

export default MainIndex

