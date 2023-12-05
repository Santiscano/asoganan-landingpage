import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import acoganar from '@/assets/brands/ACOGANAR.png';
import agriblock from '@/assets/brands/agriblocks.png'; //
import agrosavia from '@/assets/brands/AGROSAVIA.png';
import candelaria from '@/assets/brands/candelaria.jpeg';
import corantioquia from '@/assets/brands/corantioquia.jpg';
import frigorinus from '@/assets/brands/frigorinus.jpeg';
import gobAnt from '@/assets/brands/gobant.png';
import halalColombia from '@/assets/brands/HALAL_COLOMBIA.jpeg'; //
import helpPlanet from '@/assets/brands/helpplanet.png'; //
import poliJic from '@/assets/brands/POLITECNICO-JIC.png';
import ria from '@/assets/brands/RIA.png'; //
import rinconSanto from '@/assets/brands/rincon-santo.jpg'; //
import suganordeste from '@/assets/brands/SUGANORDESTE.png';
import udea from '@/assets/brands/udea.png'; //
import unal from '@/assets/brands/unal.png'; //

const imagesList = [
  { light: acoganar, dark: acoganar },
  { light: agrosavia, dark: agrosavia },
  { light: candelaria, dark: candelaria },
  { light: corantioquia, dark: corantioquia },
  { light: frigorinus, dark: frigorinus },
  { light: gobAnt, dark: gobAnt },
  { light: poliJic, dark: poliJic },
  { light: ria, dark: ria },
  { light: suganordeste, dark: suganordeste },
  { light: udea, dark: udea },
  { light: unal, dark: unal },
]

const Brands = () => {
  const [isMobil, setIsMobil] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  );
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobil( typeof window !== 'undefined' && window.innerWidth < 768 );
      }
  
      window.addEventListener( 'resize', handleResize );
  
      return () => {
        window.removeEventListener( 'resize', handleResize )
      };
    }
  },[]);
  
  return (
    <section id='brands' className="py-20 md:py-[120px] bg-gray-1 dark:bg-dark-2 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="block mb-2 text-lg font-semibold text-primary"
                data-aos='fade-up' data-aos-duration='400'
              >
                Testimonials
              </span>
              <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]"
                data-aos='fade-up' data-aos-duration='600'
              >
                What our Clients Say
              </h2>
              <p className="text-base text-body-color dark:text-dark-6"
                data-aos='fade-up' data-aos-duration='700' data-aos-delay='300'
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-m-5">
          <Swiper
            modules={[Navigation]}
            spaceBetween={isMobil ? 20 : 50}
            slidesPerView={isMobil ? 1 : 3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
          >
            {imagesList.map(({light, dark}, i) => (
              <SwiperSlide key={`brand_${i}`}>
                <a href="#brands" className='w-[174px]'>
                  <Image src={light} alt="image light" className="dark:hidden"/>
                  <Image src={dark} alt="image dark" className="hidden dark:block"/>
                </a>
              </SwiperSlide>
            ))}

            <div className="flex items-center justify-center mt-[60px] gap-1">
              <div className="swiper-button-prev bg-white p-2">
                <svg className="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.25 10.2437H4.57187L10.4156 4.29687C10.725 3.9875 10.725 3.50625 10.4156 3.19687C10.1062 2.8875 9.625 2.8875 9.31562 3.19687L2.2 10.4156C1.89062 10.725 1.89062 11.2063 2.2 11.5156L9.31562 18.7344C9.45312 18.8719 9.65937 18.975 9.86562 18.975C10.0719 18.975 10.2437 18.9062 10.4156 18.7687C10.725 18.4594 10.725 17.9781 10.4156 17.6688L4.60625 11.7906H19.25C19.6625 11.7906 20.0063 11.4469 20.0063 11.0344C20.0063 10.5875 19.6625 10.2437 19.25 10.2437Z" />
                </svg>
              </div>

              <div className="swiper-button-next bg-white p-2 shadow-xl">
                <svg className="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.8 10.45L12.6844 3.2313C12.375 2.92192 11.8938 2.92192 11.5844 3.2313C11.275 3.54067 11.275 4.02192 11.5844 4.3313L17.3594 10.2094H2.75C2.3375 10.2094 1.99375 10.5532 1.99375 10.9657C1.99375 11.3782 2.3375 11.7563 2.75 11.7563H17.4281L11.5844 17.7032C11.275 18.0126 11.275 18.4938 11.5844 18.8032C11.7219 18.9407 11.9281 19.0094 12.1344 19.0094C12.3406 19.0094 12.5469 18.9407 12.6844 18.7688L19.8 11.55C20.1094 11.2407 20.1094 10.7594 19.8 10.45Z" />
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Brands

// {imagesList.map(({light, dark}, i) => (
//   <a key={i} href="#brands" className='w-[174px]'>
//     <Image src={light} alt="image light" className="dark:hidden"/>
//     <Image src={dark} alt="image dark" className="hidden dark:block"/>
//   </a>
// ))}