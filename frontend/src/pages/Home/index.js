import React from 'react';
import lines from '../../assets/img/lines.svg';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Home from '../../components/Home';
import './styles.css';




export default function Initial() {
   return (
      <div>
         <div className="container">
            <Header />
            <Home />
         </div>
         <img src={lines} />
         <About />
         <Contact />
         <Footer />
      </div>
   )
}