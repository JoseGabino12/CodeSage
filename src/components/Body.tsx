import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from './Card'
import { data } from '../data/dataCard'
import { ArrowRightIcon } from '../icons/ArrowRightIcon'


const Body = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  // const animation = () => {
  //   window.scrollTo({top: 500, behavior: 'smooth'})
  // }

  return ( 
    <div className='grid grid-cols-6 grid-rows-3 gap-y-20 max-w-screen-xl'>

      {data.map( (info, index) => {
        const odd = index % 2 === 0;
        return <Card
          key={index} 
          card={info}
          style={`${odd ? 'col-start-1 col-end-3 ' : 'col-start-5 col-end-7'} row-start-${index+1} row-end-${index+2}`}
          animationEffect={`${odd ? 'fade-right' : 'fade-left'}`} 
        /> 
      })}

      <section className='flex flex-col items-center gap-y-5 border rounded-md p-3 col-start-3 col-end-5 row-start-5'>
        <h3
          className='text-center text-3xl'
        >
          {data[2].title}
        </h3>

        <p className='
          text-lg 
          text-center 
          font-light'
        >
          {data[2].content}
        </p>

        <button className='font-bold rounded-md bg-slate-600 p-4 w-1/2'>
          <div className='flex items-center justify-around'>
            <p className='font-bold tex-xl'>Get Started</p>
            <ArrowRightIcon width={40} height={40}/>
          </div>
        </button>
      </section>

      {/* First row
      <div
        className='font-bold text-2xl items-center col-start-1 col-end-3 flex flex-col gap-y-3 border rounded-md p-3' 
        data-aos="fade-right"
        data-aos-duration='2000'
      >
        <h3
          className='text-center text-3xl'
          // data-aos="fade-right"
          // data-aos-duration='2500'
          // data-aos-easing="ease-in-sine"
          onClick={animation}
        >
          Welcome to CodeSage
        </h3>

        <p className='
          text-lg 
          text-center 
          font-light'
        >
          Somos un sitio web que evalúa la calidad de fragmentos de código según los principios de Clean Code. Utilizando modelos de OpenAI, proporciona calificaciones y recomendaciones para mejorar la legibilidad y simplicidad del código.
        </p>
      </div>

      <div
        className='
          font-bold 
          text-2xl 
          grid 
          items-center 
          col-start-3 
          col-end-7' 
        data-aos="fade-right"
        data-aos-duration='2000'
      >
      </div>

      <div
        className='
          font-bold 
          text-2xl 
          items-center 
          col-start-5 
          col-end-7 
          row-start-2 
          flex 
          flex-col 
          gap-y-3 
          border 
          rounded-md 
          mb-10 
          p-3
        '
        data-aos="fade-right"
        data-aos-duration='2000'
      >
        <h3
          className='text-center text-3xl'
          // data-aos="fade-right"
          // data-aos-duration='2500'
        >
          Evalúa tu Código en Segundos
        </h3>

        <p className='
          text-lg 
          text-center 
          font-light'
        >
        Nuestra herramienta te permite evaluar el rendimiento, la calidad y la seguridad de tu código en cuestión de segundos. Soportamos múltiples lenguajes de programación y proporcionamos retroalimentación detallada para ayudarte a mejorar. 
        </p>
      </div>

      <div
        className='font-bold 
        text-2xl 
        items-center 
        row-start-2' 
        data-aos="fade-right"
      >
      </div> */}
  </div>
   );
}
 
export default Body;
