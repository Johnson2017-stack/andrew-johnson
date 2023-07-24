
import './App.css';
import Nav from './components/Nav';
import Home from './Pages/Home';
import About from "./Pages/About";
import Porfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";



function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About/>
      break
    case "/portfolio":
      component = <Porfolio />
      break
    case "/contact":
      component = <Contact />
      break
  }
  return (
    <div className="App">
      <>
      <Nav />
      </>
   
    </div>
  );
}

export default App;
