import type { IconProps } from "../../interfaces/interfaces"
import '../styles/arrowDown.css'

export const ArrowDownIcon = ({ width, height }: IconProps) => {
  return (
    <div className="down=arrow">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height={height} width={width} className="dark:fill-white fill-black down-arrow">
        <g id="SVGRepo_bgCarrier" stroke-width="1"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4L12.75 18.1893L17.4697 13.4697C17.7626 13.1768 18.2374 13.1768 18.5303 13.4697C18.8232 13.7626 18.8232 14.2374 18.5303 14.5303L12.5303 20.5303C12.3897 20.671 12.1989 20.75 12 20.75C11.8011 20.75 11.6103 20.671 11.4697 20.5303L5.46967 14.5303C5.17678 14.2374 5.17678 13.7626 5.46967 13.4697C5.76256 13.1768 6.23744 13.1768 6.53033 13.4697L11.25 18.1893L11.25 4C11.25 3.58579 11.5858 3.25 12 3.25Z"></path> 
        </g>
      </svg>
    </div>
  )
}

