import './App.css';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Workpage from './components/Workpage';
import About from './components/About';
import DataFetching from './components/DataFetching';



/*
      <DataFetching/>
      <About/>
      <Workpage/>
      <Contact/>
*/
function App() {
  return (
    <div className="App">
      
      <Homepage/>
      <About/>
      <DataFetching/>
      <Contact/>
      
    </div>
  );
}

export default App;
