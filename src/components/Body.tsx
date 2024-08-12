import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Card from './Card'
import { data } from '../data/dataCard'


const Body = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  // const animation = () => {
  //   window.scrollTo({top: 500, behavior: 'smooth'})
  // }

  return ( 
    <div className='grid grid-cols-6 grid-rows-2 gap-y-20 max-w-screen-xl'>

      {data.map( (info, index) => {
        return <Card card={info} style={`font-bold text-2xl items-center ${index % 2 === 0 ? 'col-start-1 col-end-3 ' : 'col-start-5 col-end-7' } flex flex-col gap-y-3 border rounded-md p-3 row-start-${index+1}`} key={index} /> 
      })}

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
