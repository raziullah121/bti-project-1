
import './App.css';
import Navbar from "./pages/components/index/Navbar";
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Contact from './pages/components/services/Contact';
import About from './pages/components/services/About';
import Team from './pages/components/services/Team';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import Protfolio from './pages/components/services/Protfolio';
import Services from './pages/components/services/Services';
import Hero from './pages/components/index/Hero';
import Logo from './pages/components/index/Logo';
import Accordion from './pages/components/services/Accordion';
import Progress from './pages/components/services/Progress';
import CallToAction from './pages/components/services/CallToAction';
import Pricing from './pages/components/products/Pricing';
import AskQuestion from './pages/components/services/AskQuestion';
import NewsLetter from './pages/components/services/NewsLetter';
import OurDetails from './pages/components/services/OurDetails';
import Footer from './pages/layouts/Footer';



function App() {
  return (

    <div className='custom-container'>

      <div className='inner-container'>

        <Navbar />
        <Hero />
        <Logo />
        <About />
        <Accordion/>
        <Progress/>
        <Services/>
        <CallToAction/>
        <Protfolio/>
        <Team/>
        <Pricing/>
        <AskQuestion/>
        <Contact/>
        <NewsLetter/>
        <OurDetails/>
        <Footer/>
      </div>
    </div>

  );
}

export default App;
