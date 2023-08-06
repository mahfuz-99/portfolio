import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Communication from './components/Communication';
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
   <div>
     <Navbar />
     <Home />
     <Communication />
     <Projects />
     <Experience />
     <Contact />
   </div>
  );
}

export default App;
