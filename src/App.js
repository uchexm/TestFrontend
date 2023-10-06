import React from 'react';
import "./index.css";
import Navbar from "./components/Navbar";
import SecondSection from './components/SecondSection';
import ServiceSection from './components/ServiceSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import BrandSection from './components/BrandSection';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <SecondSection />
      <ServiceSection />
      <CaseStudiesSection />
      <BrandSection />
      <Footer />
    </div>
  )
}

export default App
