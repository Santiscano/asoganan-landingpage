"use client";
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import '@/styles/hero.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AboutUs from '@/components/AboutUs';
import CAT from '@/components/CAT';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import Team from '@/components/Team';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Brands from '@/components/Brands';
import Footer from '@/components/Footer';

import Logo from '@/assets/Logo.png';

const listItems = [
  {name: "Inicio", href:"" },
  {name: "Acerca de", href:"" },
  {name: "precios", href:"" },
  {name: "equipo", href:"" },
  {name: "Blog", href:"" },
  {name: "contactanos", href:"" },
]

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 800, once: false })
  }, [])

  return (
    <>
      <div className='hero'>
        <Navbar
          src={Logo}
          alt='logo asoganan'
          listItems={listItems}
        />
        <Hero/>
      </div>
      <Features/>
      <AboutUs/>
      <CAT/>
      <Testimonial/>
      <FAQ/>
      <Team/>
      <Blog/>
      <Contact/>
      <Brands/>
      <Footer/>
    </>
  )
}
