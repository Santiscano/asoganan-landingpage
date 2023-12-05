"use client";
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Logo from '@/assets/Logo.png';
import '@/styles/hero.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

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

      
      <p>este testo que ?</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>
      <p>hola</p>

    </>
  )
}
