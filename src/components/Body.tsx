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

  return ( 
    <div className='grid grid-cols-6 grid-rows-3 gap-y-28 max-w-screen-xl items-center'>

      {data.map( (info, index) => {
        const odd = index % 2 === 0;

        return <Card
          key={index} 
          card={info}
          index={index}
          styleTextCol={`${odd ? 'col-start-1 col-end-3 row-start-1' : 'col-start-5 col-end-7 row-start-2'}`}
          styleImageCol={`${odd ? 'col-start-4 col-end-7 row-start-1' : 'col-start-1 col-end-4 row-start-2'}`}
        /> 
      })}

      <section className='flex flex-col items-center gap-y-5 p-3 col-start-3 col-end-5 row-start-3 mt-3'>
        <h3
          className='text-center text-4xl font-bold'
        >
          Get Started for Free
        </h3>

        <p className='
          text-lg 
          text-center 
          font-light'
        >
          Ready to improve your code quality? Get started with CodeSage today. Sign up for a free account and start evaluating your code in seconds.
        </p>

        <button className='font-bold rounded-md bg-[#102F4C] hover:bg-[#000000] p-3 w-1/2 mt-4'>
          <div className='flex items-center justify-around'>
            <p className='font-bold tex-xl text-white'>Get Started</p>
            <ArrowRightIcon width={40} height={40}/>
          </div>
        </button>
      </section>
  </div>
   );
}
 
export default Body;
