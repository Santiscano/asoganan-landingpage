"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';

import '@/styles/hero.css';

import Logo from '@/assets/Logo.png';

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


const listItems = [
  {name: "Inicio", href:"" },
  {name: "Acerca de", href:"" },
  {name: "Precios", href:"" },
  {name: "Equipo", href:"" },
  {name: "Blog", href:"" },
  {name: "Contactanos", href:"" },
]

export default function Home() {
  const [isDark, setisDark] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: false })
  }, [])

  return (
    <div className={isDark ? "dark" : ""}>
      <div className='hero bg-primary'>
        <Navbar
          src={Logo}
          alt='logo asoganan'
          listItems={listItems}
          isDark={isDark}
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
    </div>
  )
}
