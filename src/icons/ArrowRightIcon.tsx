import type { IconProps } from "../../interfaces/interfaces"
import '../styles/arrowDown.css'

export const ArrowRightIcon = ({ width, height }: IconProps) => {
  return (
    <svg viewBox="0 0 24 24" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className=" dark:fill-white fill-black" width={width} height={height}>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path 
          id="primary" 
          d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z">
        </path>
      </g>
    </svg>
  )
}