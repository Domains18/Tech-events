import React from 'react';
import Navbar from './Components/Nav/Navbar';
import Hero from './Views/Hero/Hero';
import FindEvents from './Views/FindEvents/FindEvents';
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FindEvents />
    </>
  )
}

export default App
