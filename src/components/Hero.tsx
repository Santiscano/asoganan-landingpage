'use client'
import Image from 'next/image';
import Farmer from '@/assets/farm.jpg';

const Hero = () => {
  return (
    <main className='flex flex-col md:h-[120vh] h-[110vh] items-center justify-end'>
      <div className="w-full text-center">
        <h1 
          className='text-center text-6xl font-bold uppercase text-white'
          data-aos='fade-up'
          data-aos-duration='700'
        >asoganan</h1>
        <h3 
          className='text-center text-xl font-semibold mt-4 text-white'
          data-aos='fade-up'
          data-aos-duration='700'
        >Asociación de Ganaderos del Nordeste Antioqueño</h3>
        <ul 
          className='my-6 flex gap-5 flex-wrap items-center justify-center' 
          data-aos='fade-up'
          data-aos-duration='700'
          data-aos-delay='300'
        >
          <li>
            <a href="https://links.tailgrids.com/play-download"
              className="inline-flex items-center justify-center rounded-md bg-white py-[14px] px-7 text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:text-body-color hover:bg-gray-2">
              Registrate Ahora
            </a>
          </li>
          <li>
            <a href="https://github.com/tailgrids/play-tailwind" target="_blank"
              className="flex items-center gap-4 py-[14px] rounded-md bg-white/[0.12] px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark">
              <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2005_10818)">
                  <path
                    d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z" />
                </g>
                <defs>
                  <clipPath id="clip0_2005_10818">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Conoce nuestro blog
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full px-4 mb-8">
        <div 
          className="relative z-10 mx-auto max-w-[645px]" 
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='500'
        >
          <div className="mt-16">
            <Image 
              src={Farmer} alt="arboles"
              className="mx-auto max-w-full rounded-t-xl rounded-tr-xl" 
            />
          </div>
          <div className="absolute -bottom-6 -left-9 z-[-1]">
            <svg width="134" height="106" viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1.66667" cy="104" r="1.66667" transform="rotate(-90 1.66667 104)" fill="white" />
              <circle cx="16.3333" cy="104" r="1.66667" transform="rotate(-90 16.3333 104)" fill="white" />
              <circle cx="31" cy="104" r="1.66667" transform="rotate(-90 31 104)" fill="white" />
              <circle cx="45.6667" cy="104" r="1.66667" transform="rotate(-90 45.6667 104)" fill="white" />
              <circle cx="60.3333" cy="104" r="1.66667" transform="rotate(-90 60.3333 104)" fill="white" />
              <circle cx="88.6667" cy="104" r="1.66667" transform="rotate(-90 88.6667 104)" fill="white" />
              <circle cx="117.667" cy="104" r="1.66667" transform="rotate(-90 117.667 104)" fill="white" />
              <circle cx="74.6667" cy="104" r="1.66667" transform="rotate(-90 74.6667 104)" fill="white" />
              <circle cx="103" cy="104" r="1.66667" transform="rotate(-90 103 104)" fill="white" />
              <circle cx="132" cy="104" r="1.66667" transform="rotate(-90 132 104)" fill="white" />
              <circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)" fill="white" />
              <circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)" fill="white" />
              <circle cx="31" cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="white" />
              <circle cx="45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)" fill="white" />
              <circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)" fill="white" />
              <circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)" fill="white" />
              <circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)" fill="white" />
              <circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)" fill="white" />
              <circle cx="103" cy="89.3338" r="1.66667" transform="rotate(-90 103 89.3338)" fill="white" />
              <circle cx="132" cy="89.3338" r="1.66667" transform="rotate(-90 132 89.3338)" fill="white" />
              <circle cx="1.66667" cy="74.6673" r="1.66667" transform="rotate(-90 1.66667 74.6673)" fill="white" />
              <circle cx="1.66667" cy="31.0003" r="1.66667" transform="rotate(-90 1.66667 31.0003)" fill="white" />
              <circle cx="16.3333" cy="74.6668" r="1.66667" transform="rotate(-90 16.3333 74.6668)" fill="white" />
              <circle cx="16.3333" cy="31.0003" r="1.66667" transform="rotate(-90 16.3333 31.0003)" fill="white" />
              <circle cx="31" cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)" fill="white" />
              <circle cx="31" cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)" fill="white" />
              <circle cx="45.6667" cy="74.6668" r="1.66667" transform="rotate(-90 45.6667 74.6668)" fill="white" />
              <circle cx="45.6667" cy="31.0003" r="1.66667" transform="rotate(-90 45.6667 31.0003)" fill="white" />
              <circle cx="60.3333" cy="74.6668" r="1.66667" transform="rotate(-90 60.3333 74.6668)" fill="white" />
              <circle cx="60.3333" cy="31.0001" r="1.66667" transform="rotate(-90 60.3333 31.0001)" fill="white" />
              <circle cx="88.6667" cy="74.6668" r="1.66667" transform="rotate(-90 88.6667 74.6668)" fill="white" />
              <circle cx="88.6667" cy="31.0001" r="1.66667" transform="rotate(-90 88.6667 31.0001)" fill="white" />
              <circle cx="117.667" cy="74.6668" r="1.66667" transform="rotate(-90 117.667 74.6668)" fill="white" />
              <circle cx="117.667" cy="31.0001" r="1.66667" transform="rotate(-90 117.667 31.0001)" fill="white" />
              <circle cx="74.6667" cy="74.6668" r="1.66667" transform="rotate(-90 74.6667 74.6668)" fill="white" />
              <circle cx="74.6667" cy="31.0001" r="1.66667" transform="rotate(-90 74.6667 31.0001)" fill="white" />
              <circle cx="103" cy="74.6668" r="1.66667" transform="rotate(-90 103 74.6668)" fill="white" />
              <circle cx="103" cy="31.0001" r="1.66667" transform="rotate(-90 103 31.0001)" fill="white" />
              <circle cx="132" cy="74.6668" r="1.66667" transform="rotate(-90 132 74.6668)" fill="white" />
              <circle cx="132" cy="31.0001" r="1.66667" transform="rotate(-90 132 31.0001)" fill="white" />
              <circle cx="1.66667" cy="60.0003" r="1.66667" transform="rotate(-90 1.66667 60.0003)" fill="white" />
              <circle cx="1.66667" cy="16.3336" r="1.66667" transform="rotate(-90 1.66667 16.3336)" fill="white" />
              <circle cx="16.3333" cy="60.0003" r="1.66667" transform="rotate(-90 16.3333 60.0003)" fill="white" />
              <circle cx="16.3333" cy="16.3336" r="1.66667" transform="rotate(-90 16.3333 16.3336)" fill="white" />
              <circle cx="31" cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)" fill="white" />
              <circle cx="31" cy="16.3336" r="1.66667" transform="rotate(-90 31 16.3336)" fill="white" />
              <circle cx="45.6667" cy="60.0003" r="1.66667" transform="rotate(-90 45.6667 60.0003)" fill="white" />
              <circle cx="45.6667" cy="16.3336" r="1.66667" transform="rotate(-90 45.6667 16.3336)" fill="white" />
              <circle cx="60.3333" cy="60.0003" r="1.66667" transform="rotate(-90 60.3333 60.0003)" fill="white" />
              <circle cx="60.3333" cy="16.3336" r="1.66667" transform="rotate(-90 60.3333 16.3336)" fill="white" />
              <circle cx="88.6667" cy="60.0003" r="1.66667" transform="rotate(-90 88.6667 60.0003)" fill="white" />
              <circle cx="88.6667" cy="16.3336" r="1.66667" transform="rotate(-90 88.6667 16.3336)" fill="white" />
              <circle cx="117.667" cy="60.0003" r="1.66667" transform="rotate(-90 117.667 60.0003)" fill="white" />
              <circle cx="117.667" cy="16.3336" r="1.66667" transform="rotate(-90 117.667 16.3336)" fill="white" />
              <circle cx="74.6667" cy="60.0003" r="1.66667" transform="rotate(-90 74.6667 60.0003)" fill="white" />
              <circle cx="74.6667" cy="16.3336" r="1.66667" transform="rotate(-90 74.6667 16.3336)" fill="white" />
              <circle cx="103" cy="60.0003" r="1.66667" transform="rotate(-90 103 60.0003)" fill="white" />
              <circle cx="103" cy="16.3336" r="1.66667" transform="rotate(-90 103 16.3336)" fill="white" />
              <circle cx="132" cy="60.0003" r="1.66667" transform="rotate(-90 132 60.0003)" fill="white" />
              <circle cx="132" cy="16.3336" r="1.66667" transform="rotate(-90 132 16.3336)" fill="white" />
              <circle cx="1.66667" cy="45.3336" r="1.66667" transform="rotate(-90 1.66667 45.3336)" fill="white" />
              <circle cx="1.66667" cy="1.66683" r="1.66667" transform="rotate(-90 1.66667 1.66683)" fill="white" />
              <circle cx="16.3333" cy="45.3336" r="1.66667" transform="rotate(-90 16.3333 45.3336)" fill="white" />
              <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(-90 16.3333 1.66683)" fill="white" />
              <circle cx="31" cy="45.3336" r="1.66667" transform="rotate(-90 31 45.3336)" fill="white" />
              <circle cx="31" cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)" fill="white" />
              <circle cx="45.6667" cy="45.3336" r="1.66667" transform="rotate(-90 45.6667 45.3336)" fill="white" />
              <circle cx="45.6667" cy="1.66683" r="1.66667" transform="rotate(-90 45.6667 1.66683)" fill="white" />
              <circle cx="60.3333" cy="45.3338" r="1.66667" transform="rotate(-90 60.3333 45.3338)" fill="white" />
              <circle cx="60.3333" cy="1.66707" r="1.66667" transform="rotate(-90 60.3333 1.66707)" fill="white" />
              <circle cx="88.6667" cy="45.3338" r="1.66667" transform="rotate(-90 88.6667 45.3338)" fill="white" />
              <circle cx="88.6667" cy="1.66707" r="1.66667" transform="rotate(-90 88.6667 1.66707)" fill="white" />
              <circle cx="117.667" cy="45.3338" r="1.66667" transform="rotate(-90 117.667 45.3338)" fill="white" />
              <circle cx="117.667" cy="1.66707" r="1.66667" transform="rotate(-90 117.667 1.66707)" fill="white" />
              <circle cx="74.6667" cy="45.3338" r="1.66667" transform="rotate(-90 74.6667 45.3338)" fill="white" />
              <circle cx="74.6667" cy="1.66707" r="1.66667" transform="rotate(-90 74.6667 1.66707)" fill="white" />
              <circle cx="103" cy="45.3338" r="1.66667" transform="rotate(-90 103 45.3338)" fill="white" />
              <circle cx="103" cy="1.66707" r="1.66667" transform="rotate(-90 103 1.66707)" fill="white" />
              <circle cx="132" cy="45.3338" r="1.66667" transform="rotate(-90 132 45.3338)" fill="white" />
              <circle cx="132" cy="1.66707" r="1.66667" transform="rotate(-90 132 1.66707)" fill="white" />
            </svg>
          </div>
          <div className="absolute -top-6 -right-6 z-[-1]">
            <svg width="134" height="106" viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1.66667" cy="104" r="1.66667" transform="rotate(-90 1.66667 104)" fill="white" />
              <circle cx="16.3333" cy="104" r="1.66667" transform="rotate(-90 16.3333 104)" fill="white" />
              <circle cx="31" cy="104" r="1.66667" transform="rotate(-90 31 104)" fill="white" />
              <circle cx="45.6667" cy="104" r="1.66667" transform="rotate(-90 45.6667 104)" fill="white" />
              <circle cx="60.3333" cy="104" r="1.66667" transform="rotate(-90 60.3333 104)" fill="white" />
              <circle cx="88.6667" cy="104" r="1.66667" transform="rotate(-90 88.6667 104)" fill="white" />
              <circle cx="117.667" cy="104" r="1.66667" transform="rotate(-90 117.667 104)" fill="white" />
              <circle cx="74.6667" cy="104" r="1.66667" transform="rotate(-90 74.6667 104)" fill="white" />
              <circle cx="103" cy="104" r="1.66667" transform="rotate(-90 103 104)" fill="white" />
              <circle cx="132" cy="104" r="1.66667" transform="rotate(-90 132 104)" fill="white" />
              <circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)" fill="white" />
              <circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)" fill="white" />
              <circle cx="31" cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="white" />
              <circle cx="45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)" fill="white" />
              <circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)" fill="white" />
              <circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)" fill="white" />
              <circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)" fill="white" />
              <circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)" fill="white" />
              <circle cx="103" cy="89.3338" r="1.66667" transform="rotate(-90 103 89.3338)" fill="white" />
              <circle cx="132" cy="89.3338" r="1.66667" transform="rotate(-90 132 89.3338)" fill="white" />
              <circle cx="1.66667" cy="74.6673" r="1.66667" transform="rotate(-90 1.66667 74.6673)" fill="white" />
              <circle cx="1.66667" cy="31.0003" r="1.66667" transform="rotate(-90 1.66667 31.0003)" fill="white" />
              <circle cx="16.3333" cy="74.6668" r="1.66667" transform="rotate(-90 16.3333 74.6668)" fill="white" />
              <circle cx="16.3333" cy="31.0003" r="1.66667" transform="rotate(-90 16.3333 31.0003)" fill="white" />
              <circle cx="31" cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)" fill="white" />
              <circle cx="31" cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)" fill="white" />
              <circle cx="45.6667" cy="74.6668" r="1.66667" transform="rotate(-90 45.6667 74.6668)" fill="white" />
              <circle cx="45.6667" cy="31.0003" r="1.66667" transform="rotate(-90 45.6667 31.0003)" fill="white" />
              <circle cx="60.3333" cy="74.6668" r="1.66667" transform="rotate(-90 60.3333 74.6668)" fill="white" />
              <circle cx="60.3333" cy="31.0001" r="1.66667" transform="rotate(-90 60.3333 31.0001)" fill="white" />
              <circle cx="88.6667" cy="74.6668" r="1.66667" transform="rotate(-90 88.6667 74.6668)" fill="white" />
              <circle cx="88.6667" cy="31.0001" r="1.66667" transform="rotate(-90 88.6667 31.0001)" fill="white" />
              <circle cx="117.667" cy="74.6668" r="1.66667" transform="rotate(-90 117.667 74.6668)" fill="white" />
              <circle cx="117.667" cy="31.0001" r="1.66667" transform="rotate(-90 117.667 31.0001)" fill="white" />
              <circle cx="74.6667" cy="74.6668" r="1.66667" transform="rotate(-90 74.6667 74.6668)" fill="white" />
              <circle cx="74.6667" cy="31.0001" r="1.66667" transform="rotate(-90 74.6667 31.0001)" fill="white" />
              <circle cx="103" cy="74.6668" r="1.66667" transform="rotate(-90 103 74.6668)" fill="white" />
              <circle cx="103" cy="31.0001" r="1.66667" transform="rotate(-90 103 31.0001)" fill="white" />
              <circle cx="132" cy="74.6668" r="1.66667" transform="rotate(-90 132 74.6668)" fill="white" />
              <circle cx="132" cy="31.0001" r="1.66667" transform="rotate(-90 132 31.0001)" fill="white" />
              <circle cx="1.66667" cy="60.0003" r="1.66667" transform="rotate(-90 1.66667 60.0003)" fill="white" />
              <circle cx="1.66667" cy="16.3336" r="1.66667" transform="rotate(-90 1.66667 16.3336)" fill="white" />
              <circle cx="16.3333" cy="60.0003" r="1.66667" transform="rotate(-90 16.3333 60.0003)" fill="white" />
              <circle cx="16.3333" cy="16.3336" r="1.66667" transform="rotate(-90 16.3333 16.3336)" fill="white" />
              <circle cx="31" cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)" fill="white" />
              <circle cx="31" cy="16.3336" r="1.66667" transform="rotate(-90 31 16.3336)" fill="white" />
              <circle cx="45.6667" cy="60.0003" r="1.66667" transform="rotate(-90 45.6667 60.0003)" fill="white" />
              <circle cx="45.6667" cy="16.3336" r="1.66667" transform="rotate(-90 45.6667 16.3336)" fill="white" />
              <circle cx="60.3333" cy="60.0003" r="1.66667" transform="rotate(-90 60.3333 60.0003)" fill="white" />
              <circle cx="60.3333" cy="16.3336" r="1.66667" transform="rotate(-90 60.3333 16.3336)" fill="white" />
              <circle cx="88.6667" cy="60.0003" r="1.66667" transform="rotate(-90 88.6667 60.0003)" fill="white" />
              <circle cx="88.6667" cy="16.3336" r="1.66667" transform="rotate(-90 88.6667 16.3336)" fill="white" />
              <circle cx="117.667" cy="60.0003" r="1.66667" transform="rotate(-90 117.667 60.0003)" fill="white" />
              <circle cx="117.667" cy="16.3336" r="1.66667" transform="rotate(-90 117.667 16.3336)" fill="white" />
              <circle cx="74.6667" cy="60.0003" r="1.66667" transform="rotate(-90 74.6667 60.0003)" fill="white" />
              <circle cx="74.6667" cy="16.3336" r="1.66667" transform="rotate(-90 74.6667 16.3336)" fill="white" />
              <circle cx="103" cy="60.0003" r="1.66667" transform="rotate(-90 103 60.0003)" fill="white" />
              <circle cx="103" cy="16.3336" r="1.66667" transform="rotate(-90 103 16.3336)" fill="white" />
              <circle cx="132" cy="60.0003" r="1.66667" transform="rotate(-90 132 60.0003)" fill="white" />
              <circle cx="132" cy="16.3336" r="1.66667" transform="rotate(-90 132 16.3336)" fill="white" />
              <circle cx="1.66667" cy="45.3336" r="1.66667" transform="rotate(-90 1.66667 45.3336)" fill="white" />
              <circle cx="1.66667" cy="1.66683" r="1.66667" transform="rotate(-90 1.66667 1.66683)" fill="white" />
              <circle cx="16.3333" cy="45.3336" r="1.66667" transform="rotate(-90 16.3333 45.3336)" fill="white" />
              <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(-90 16.3333 1.66683)" fill="white" />
              <circle cx="31" cy="45.3336" r="1.66667" transform="rotate(-90 31 45.3336)" fill="white" />
              <circle cx="31" cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)" fill="white" />
              <circle cx="45.6667" cy="45.3336" r="1.66667" transform="rotate(-90 45.6667 45.3336)" fill="white" />
              <circle cx="45.6667" cy="1.66683" r="1.66667" transform="rotate(-90 45.6667 1.66683)" fill="white" />
              <circle cx="60.3333" cy="45.3338" r="1.66667" transform="rotate(-90 60.3333 45.3338)" fill="white" />
              <circle cx="60.3333" cy="1.66707" r="1.66667" transform="rotate(-90 60.3333 1.66707)" fill="white" />
              <circle cx="88.6667" cy="45.3338" r="1.66667" transform="rotate(-90 88.6667 45.3338)" fill="white" />
              <circle cx="88.6667" cy="1.66707" r="1.66667" transform="rotate(-90 88.6667 1.66707)" fill="white" />
              <circle cx="117.667" cy="45.3338" r="1.66667" transform="rotate(-90 117.667 45.3338)" fill="white" />
              <circle cx="117.667" cy="1.66707" r="1.66667" transform="rotate(-90 117.667 1.66707)" fill="white" />
              <circle cx="74.6667" cy="45.3338" r="1.66667" transform="rotate(-90 74.6667 45.3338)" fill="white" />
              <circle cx="74.6667" cy="1.66707" r="1.66667" transform="rotate(-90 74.6667 1.66707)" fill="white" />
              <circle cx="103" cy="45.3338" r="1.66667" transform="rotate(-90 103 45.3338)" fill="white" />
              <circle cx="103" cy="1.66707" r="1.66667" transform="rotate(-90 103 1.66707)" fill="white" />
              <circle cx="132" cy="45.3338" r="1.66667" transform="rotate(-90 132 45.3338)" fill="white" />
              <circle cx="132" cy="1.66707" r="1.66667" transform="rotate(-90 132 1.66707)" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
