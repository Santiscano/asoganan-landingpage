import React from 'react';
import Image from 'next/image';

import '@/styles/hero.css';

import About1 from '@/assets/about/about-image-01.jpg';
import About2 from '@/assets/about/about-image-02.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-1 dark:bg-dark-2 pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]">
      <div className="container">
        <div data-aos='fade-up' data-aos-duration='700'>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2
                  className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Brilliant Toolkit to Build Nextgen Website Faster.
                </h2>
                <p className="mb-10 text-base leading-relaxed text-secondary dark:text-dark-6">
                The main  is to focus on educating attendees on how to best protect highly vulnerable business
                applications with
                interactive panel discussions and roundtables led by subject matter experts.
                <br/> 
                <br/>
                The main is to focus on educating attendees on how to best protect highly vulnerable business
                applications with
                interactive panel.
                </p>
                <a href="#"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-primary rounded-md px-7 bg-primary hover:bg-blue-dark hover:border-blue-dark">
                  Know More
                </a>
              </div>
            </div>

            {/* imagenes */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-wrap -mx-2 sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <Image 
                      src={About1} alt="about image"
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                </div>
                
                
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <Image
                      src={About2} alt='trabajando en computador'
                      className='object-cover object-center w-full h-full'
                    />
                  </div>

                  <div className='bg-primary relative z-10 mb-4 flex items-center justify-center overflow-hidden py-12 px-6 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8'>
                    <div>
                      <span className="block text-5xl font-extrabold text-white">09</span>
                      <span className='block text-base font-semibold text-white'>we have</span>
                      <span className='block text-base font-medium text-white text-opacity-70'>Years of exprerience</span>
                    </div>
                    <div>
                      <span className="absolute top-0 left-0 -z-10">
                        <svg width="106" height="144" viewBox="0 0 106 144" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.1" x="-67" y="47.127" width="113.378" height="131.304"
                            transform="rotate(-42.8643 -67 47.127)" fill="url(#paint0_linear_1416_214)" />
                          <defs>
                            <linearGradient id="paint0_linear_1416_214" x1="-10.3111" y1="47.127" x2="-10.3111"
                              y2="178.431" gradientUnits="userSpaceOnUse">
                              <stop stopColor="white" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute top-0 right-0 -z-10">
                        <svg width="130" height="97" viewBox="0 0 130 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.1" x="0.86792" y="-6.67725" width="155.563" height="140.614"
                            transform="rotate(-42.8643 0.86792 -6.67725)" fill="url(#paint0_linear_1416_215)" />
                          <defs>
                            <linearGradient id="paint0_linear_1416_215" x1="78.6495" y1="-6.67725" x2="78.6495"
                              y2="133.937" gradientUnits="userSpaceOnUse">
                              <stop stopColor="white" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute bottom-0 right-0 -z-10">
                        <svg width="175" height="104" viewBox="0 0 175 104" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.1" x="175.011" y="108.611" width="101.246" height="148.179"
                            transform="rotate(137.136 175.011 108.611)" fill="url(#paint0_linear_1416_216)" />
                          <defs>
                            <linearGradient id="paint0_linear_1416_216" x1="225.634" y1="108.611" x2="225.634" y2="256.79"
                              gradientUnits="userSpaceOnUse">
                              <stop stopColor="white" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
