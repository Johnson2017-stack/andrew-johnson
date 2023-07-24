
import Nav from './components/Nav';
import Home from './Pages/Home';
import About from './Pages/About'
import Porfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import  {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Porfolio />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>

      </>
   
    
  );
}

export default App;
