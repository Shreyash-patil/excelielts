import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Features } from './components/Features'
import Testimonials from './components/Testimonials'
import { Footer } from './components/Footer'
import HeroSkeleton from './components/HeroSkeleton'

const App = () => {
 const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Simulated the data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

 //Disable scroll while isLoading is true
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }
    
    
    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [isLoading]); 
  return (
    <div>
      <Navbar/>
      {/* I build the skeleton component incase of data fetching */}
      {/* {isLoading ? <HeroSkeleton /> : <Hero />} */}
      <Hero />
      <Features/>
      <Testimonials/>
      <Footer/>

    </div>
  )
}

export default App