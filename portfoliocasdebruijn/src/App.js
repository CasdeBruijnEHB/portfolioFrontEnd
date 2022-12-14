import './App.css';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Workpage from './components/Workpage';
import About from './components/About';
import DataFetching from './components/DataFetching';


/*
      <Homepage/>
      <About/>
      <Workpage/>
      <Contact/>
*/
function App() {
  return (
    <div className="App">
      
      <DataFetching/>
    </div>
  );
}

export default App;
