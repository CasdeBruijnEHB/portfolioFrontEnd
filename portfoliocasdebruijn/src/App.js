import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

import './App.css';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Workpage from './components/Workpage';
import About from './components/About';
import DataFetching from './components/DataFetching';
import ThreeScene from "./components/ThreeScene";
import Aboutv2 from "./components/Aboutv2";



/*
      <DataFetching/>
      <About/>
      <Workpage/>
      <Contact/>
*/
function App() {
  const scrollRef = useRef(null);
  //useScrollSnap({ ref: scrollRef, duration: 20, delay: 20 });

  return (
    <div className="App" ref={scrollRef}>
      <nav>
            <div id="navDiv">
             <p ><a href="#firstpage">Home</a> </p>
             <p > <a href="#secondpage">About me</a> </p>
            <p> <a href="#thirdpage">Work</a> </p>
             <p><a href="#fourthpage">Contact</a></p>
          </div>
        </nav>
      <ThreeScene/>
      <div id="firstpage" className='firstpage'>
      <Homepage/>
      </div>
      <div id="secondpage" className='secondpage'>
      <Aboutv2/>
      </div>
      <div  id="thirdpage" className='thirdpage'>
      <DataFetching/>
      </div>
      <div id="fourthpage" className='fourthpage'>
      <Contact/>
      </div>
      
      
      
      
      
    </div>
  );
}

export default App;
