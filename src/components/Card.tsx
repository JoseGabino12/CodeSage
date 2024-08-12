import type { ICard } from "../../interfaces/interfaces";

interface CardProps {
  card: ICard,
  style: string
}

const Card = ({card, style}: CardProps) => {

  return ( 
    <div
      className={style} 
      data-aos="fade-right"
      data-aos-duration='2000'
    >

    <h3
      className='text-center text-3xl'
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