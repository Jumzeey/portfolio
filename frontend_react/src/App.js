import React from 'react';
import { About, Case, Footer, Header, Skills, Testimonial, Work, } from "./container";
import { Navbar } from './components'
import './App.scss';
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Case/>
      <Footer/>
    </div>
  )
};

export default App;