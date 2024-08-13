import type { ICard } from "../../interfaces/interfaces";

interface CardProps {
  card: ICard,
  style: string,
  animationEffect: string
}

const Card = ({card, style, animationEffect}: CardProps) => {

  return ( 
    <div
      className={`flex flex-col items-center gap-y-5 border rounded-md p-3 ${style}`} 
      data-aos={animationEffect}
      data-aos-duration='2000'
    >

    <h3
      className='text-center text-3xl font-bold'
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
   );
}
 
export default Card;