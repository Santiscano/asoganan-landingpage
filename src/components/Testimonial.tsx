'use client'
import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import CardTestimonial from './CardTestimonial';
import user1 from '@/assets/testimonials/author-01.jpg';
import user2 from '@/assets/testimonials/author-02.jpg';
import user3 from '@/assets/testimonials/author-03.jpg';

const testimonials = [
  { 
    message: "“Our members are so impressed. It is intuitive. It is clean. It is distraction free. If you are building a community.’’",
    image: user1,
    name: "Sabo Masties",
    role: "Founder @ Rolex"
  },
  { 
    message: "“Our members are so impressed. It is intuitive. It is clean. It is distraction free. If you are building a community.’’",
    image: user2,
    name: "Sabo Masties",
    role: "Founder @ Rolex"
  },
  { 
    message: "“Our members are so impressed. It is intuitive. It is clean. It is distraction free. If you are building a community.’’",
    image: user3,
    name: "Sabo Masties",
    role: "Founder @ Rolex"
  },
  { 
    message: "“Our members are so impressed. It is intuitive. It is clean. It is distraction free. If you are building a community.’’",
    image: user1,
    name: "Sabo Masties",
    role: "Founder @ Rolex"
  },
  { 
    message: "“Our members are so impressed. It is intuitive. It is clean. It is distraction free. If you are building a community.’’",
    image: user2,
    name: "Sabo Masties",
    role: "Founder @ Rolex"
  },
  { 
    message: "“Our members are so impressed. It is intuitive. It is clean. It is distraction free. If you are building a community.’’",
    image: user3,
    name: "Sabo Masties",
    role: "Founder @ Rolex"
  },
];


const Testimonial = () => {
  const [isMobil, setIsMobil] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobil( window.innerWidth < 768 );
    }

    window.addEventListener( 'resize', handleResize );

    return () => {
      window.removeEventListener( 'resize', handleResize )
    };
  },[]);

  return (
    <section id="testimonials" className="py-20 md:py-[120px] bg-gray-1 dark:bg-dark-2 overflow-hidden">
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
            spaceBetween={isMobil ? 10 : 50}
            slidesPerView={ isMobil ? 1 : 3 }
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
          >
            {testimonials.map(({ message, image, name, role }, i) => (
              <SwiperSlide key={message} >
                <CardTestimonial
                  message={message}
                  image={image}
                  name={name}
                  role={role}
                />
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

export default Testimonial
