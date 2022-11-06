import React from 'react'
import {FaAirbnb}  from "react-icons/fa";
import "../styles/Home.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Home = () => {

  return (
    <div>
        <FaAirbnb className='logo' />
        <p className='font-bold text-2xl relative txt '>AIRBNB</p>
        <br />
    </div>
  )
}

export default Home