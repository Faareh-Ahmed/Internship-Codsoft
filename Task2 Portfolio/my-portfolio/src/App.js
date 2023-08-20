import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills'
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />  
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Footer />
            </>
          } />

<Route exact path='/about' element={
            <>
             
              <About />
              <Footer/>
            </>
          } />

<Route exact path='/skills' element={
            <>
             
              <Skills />
              <Footer/>
            </>
          } />

<Route exact path='/projects' element={
            <>
             
              <Projects />
              <Footer/>
            </>
          } />

<Route exact path='/connect' element={
            <>
             
              <Footer/>
              
            </>
          } />

        </Routes>
      </Router>
     
    </>
  );
}

export default App;
