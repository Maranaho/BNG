import React from 'react'
import Header from './Header/Header';
import Testimonials from './Testimonials/Testimonials';
import EventsSlider from './EventsSlider/EventsSlider';
import NewsLetter from './NewsLetter/NewsLetter';
import './Home.css'
const Home = () => (
  <main>
    <Header/>
    <Testimonials/>
    <EventsSlider/>
    <NewsLetter/>  
  </main>
)

export default Home
