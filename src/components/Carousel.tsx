import { useEffect, useState } from 'react'
import carousel1 from '../assets/carousel-1.jpg'
import carousel2 from '../assets/carousel-2.jpg'
import carousel3 from '../assets/carousel-3.jpg'
import carousel4 from '../assets/carousel-4.jpg'
import ChevronLeft from '../assets/ChevronLeft'
import ChevronRight from '../assets/ChevronRight'

const carouselData = [carousel1, carousel2, carousel3, carousel4]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  function carouselInfiniteScroll() {
    if (currentIndex === carouselData.length - 1) setCurrentIndex(0)
    else setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => carouselInfiniteScroll(), 3000)
    return () => clearInterval(interval)
  })

  function nextSlide() {
    if (currentIndex === carouselData.length - 1) setCurrentIndex(0)
    else setCurrentIndex(currentIndex + 1)
  }

  function prevSlide() {
    if (currentIndex === 0) setCurrentIndex(carouselData.length - 1)
    else setCurrentIndex(currentIndex - 1)
  }

  return (
    <section className='group relative cursor-pointer'>
      <article className='bg-black-500 flex flex-nowrap overflow-hidden'>
        {carouselData.map((item, index) => {
          return (
            <div
              key={index}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              className={`h-full w-full min-w-full transition-transform duration-500 ease-in-out`}
            >
              <img
                className={`h-[63vw] w-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-105 sm:h-auto`}
                src={item}
              />
            </div>
          )
        })}
      </article>
      <button
        className='absolute bottom-0 left-0 top-0 w-6 text-white transition-opacity group-hover:opacity-100 sm:w-10 sm:opacity-0'
        onClick={prevSlide}
      >
        <ChevronLeft />
      </button>
      <button
        className='absolute bottom-0 right-0 top-0 w-6 text-white transition-opacity group-hover:opacity-100 sm:w-10 sm:opacity-0'
        onClick={nextSlide}
      >
        <ChevronRight />
      </button>
    </section>
  )
}
