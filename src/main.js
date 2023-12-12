import React, {useEffect, useRef, useState} from 'react'
import { motion, useInView } from 'framer-motion'
import NavBar from './navbar';



function MainIndex() {
const ref = useRef(null);
const isInView = useInView(ref);

useEffect(() => {

console.log("in view 1",isInView);
}, [isInView])

const darkMode = localStorage.getItem('theme') === 'dark';

// const textColor = darkMode ? 'text-darkorange' : "text-navlight"

const [textColor, setTextColor] = useState('');

useEffect(() => {
  
 darkMode ? setTextColor('text-darkorange') : setTextColor("text-navlight")

}, [darkMode])





  return (
    <div ref={ref} className='body  scroll-smooth overflow-x-hidden dark:bg-dark' style={{ transition: 'background-color 1s' }}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {isInView && <NavBar textColor={textColor}/>}
      <motion.div  className=' w-full bg-light h-screen  ' initial={{ opacity:0}}  transition={{duration:1}}></motion.div>

    
       </div>
  )
}

export default MainIndex

