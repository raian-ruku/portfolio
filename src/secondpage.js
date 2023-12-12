import React, {useEffect, useRef} from 'react'
import { motion, useInView } from 'framer-motion'
import NavBar from './navbar';


function SecondPage() {

  const ref = useRef(null);
const isInView = useInView(ref);

useEffect(() => {

// console.log("in view 2",isInView);
}, [isInView])

const darkMode = localStorage.getItem('theme') === 'dark';

const textColor = darkMode ? 'text-dark' : 'text-navlightdark';


  return (
    <div ref={ref} className='body  scroll-smooth overflow-x-hidden '  >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <motion.div  className='h-screen bg-lightblack dark:bg-darkorange w-full' initial={{ opacity:0 }} whileInView={{opacity:1}} transition={{duration:1}} style={{ transition: 'background-color 1s' }}   >
        {isInView && <NavBar textColor={textColor} />}
      </motion.div>
    </div>
  )
}

export default SecondPage

