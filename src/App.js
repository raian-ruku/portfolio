import SecondPage from "./secondpage";
import MainIndex from "./main";


import { AnimatePresence } from "framer-motion";



function App() {

  
  return (
  <div className="" >
   <AnimatePresence>
    
    <MainIndex/>
    <SecondPage/>
      </AnimatePresence>
 </div>
  );
}

export default App;
