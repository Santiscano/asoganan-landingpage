import React from 'react';

import Image, { StaticImageData } from 'next/image';
import start from '@/assets/testimonials/icon-star.svg';
import image from '@/assets/testimonials/author-01.jpg';

const CardTestimonial = ({message, image, name, role }:{ message:string, image:StaticImageData, name:string, role: string }) => {
  return (
    <div className="shadow-testimonial bg-white dark:bg-dark rounded-xl py-[30px] px-4 sm:px-[30px]">
      <div className="flex items-center gap-[2px] mb-[18px]">
        <Image src={start} alt="star icon" />
        <Image src={start} alt="star icon" />
        <Image src={start} alt="star icon" />
        <Image src={start} alt="star icon" />
        <Image src={start} alt="star icon" />
      </div>

      <p className="text-body-color dark:text-dark-6 text-base mb-6">
        {message}
      </p>

      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <Image src={image} alt={name}
            className="w-[50px] h-[50px] rounded-full overflow-hidden" />
        </div>

        <div>
          <h3 className="font-semibold text-sm text-dark dark:text-white">
            {name}
          </h3>
          <p className="text-xs text-body-secondary">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default CardTestimonial
