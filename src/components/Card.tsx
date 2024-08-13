import type { ICard } from "../../interfaces/interfaces";
import welcome from '../assets/img/welcome.svg';
import evaluation from '../assets/img/evaluation.svg'

interface CardProps {
  card: ICard,
  index: number,
  styleTextCol: string
  styleImageCol: string
}

const Card = ({card, index, styleTextCol, styleImageCol}: CardProps) => {
  const odd = index % 2 === 0;

  return (
    <>
      <div
        className={`flex flex-col items-center gap-y-5 p-4 ${styleTextCol}`} 
        data-aos={`${odd ? 'fade-right' : 'fade-left'}`}
        data-aos-duration='2000'
      >

        <h3
          className='text-center text-4xl font-bold'
        >
          {card.title}
        </h3>

        <p className='
          text-lg 
          text-center 
          font-light'
        >
        {card.content}
        </p>
      </div>

      <div 
        className={`flex flex-col items-center gap-y-5 p-4 ${styleImageCol} row-start-${index+1} row-end-${index+2} drop-shadow-2xl`}
      >
        <img src={odd ? welcome.src : evaluation.src} className="w-full h-full"/>
      </div>
    </> 
   );
}
 
export default Card;