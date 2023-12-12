import React, {useState, useEffect} from 'react';
import Button from './button';

function NavBar({ textColor }) {

const [darkmode, setDarkMode] = useState(localStorage.getItem('theme') || 'light');


useEffect(() => {

const storedDarkMode = localStorage.getItem('theme') === 'dark'
// setDarkMode(storedDarkMode)

if(storedDarkMode){
document.documentElement.classList.add('dark')
}
else{
document.documentElement.classList.remove('dark')
} 

console.log("darkmode", darkmode);
},[darkmode])
  
const toggleDarkMode = () => {
const newDarkMode = !darkmode
setDarkMode(newDarkMode)
localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')

if(newDarkMode){
document.documentElement.classList.add('dark')
}
else{
document.documentElement.classList.remove('dark')
}



}



  return (
    <div className={`${textColor} font-lubalin h-[50px] bg-transparent text-[25px] flex flex-row justify-between `} >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <img className='bg-orange-500' alt='logo'></img>
     <div className='right_components flex flex-row justify-between items-center '>

<Button text = {"about"} textColor = {textColor} />
<Button text = {"projects"} textColor = {textColor}/>
<Button text = {"contact"} textColor = {textColor}/>
<Button text = {"theme"} textColor = {textColor} onClick={toggleDarkMode}/>
     </div>
    </div>
  );
}

export default NavBar;