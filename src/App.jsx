import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <h1 style={
        {color:'red'}
        }>Hello World
      </h1>

      <Header/>
      <Hero/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;

