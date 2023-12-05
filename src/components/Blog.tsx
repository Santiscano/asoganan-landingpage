import Image, { StaticImageData } from 'next/image';
import React from 'react';

import blog1 from '@/assets/blog/blog-01.jpg';
import blog2 from '@/assets/blog/blog-02.jpg';
import blog3 from '@/assets/blog/blog-03.jpg';

interface ListBlogs {
  image: StaticImageData;
  date: string;
  title: string;
  subtitle: string;
}
const listBlogs: ListBlogs[] = [
  {
    image: blog1, date: "Dic 22, 2023", title: "Meet AutoManage, the best AI management tools", 
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry1."
  },
  {
    image: blog2, date: "Mar 15, 2023", title: "How to earn more money as a wellness coach", 
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry2."
  },
  {
    image: blog3, date: "Ene 05, 2023", title: "The no-fuss guide to upselling and cross selling",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry3."
  },
]

const Blog = () => {
  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4"
          data-aos='fade-up' data-aos-duration='400'
        >
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="block mb-2 text-lg font-semibold text-primary">
                Nuestros Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Nuestras Noticias Más Recientes
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {
            listBlogs.map(({image, date, title, subtitle}, i) => (
              <div key={subtitle + i} className="w-full px-4 md:w-1/2 lg:w-1/3"
                data-aos='fade-up'
              >
                <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                  <div className="mb-8 overflow-hidden rounded-[5px]">
                    <a href="blog-details.html" className="block">
                      <Image src={image} alt={title}
                        className="w-full transition group-hover:rotate-6 group-hover:scale-125" />
                    </a>
                  </div>
                  <div>
                    <span
                      className="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                      {date}
                    </span>
                    <h3>
                      <a href="#"
                        className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        {title}
                      </a>
                    </h3>
                    <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">
                      {subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blog
