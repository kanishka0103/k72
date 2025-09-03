import React from 'react'
import Video from '../components/home/Video.jsx'
import { Link } from "react-router-dom";
import HeroBottomText from '../components/home/HomeBottomText.jsx'
import HomeHeroText from '../components/home/HomeHeroText.jsx'



const Home = () => {
  return (
    <div>
    <div className='h-screen w-screen bg-black fixed'>
        <Video />
    </div>
    <div className='h-screen w-screen relative flex flex-col justify-between '>
        <HomeHeroText />
        <HeroBottomText />
        </div>
    </div>  
  )
}

export default Home
