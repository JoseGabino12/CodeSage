import { useRef } from 'react'

import '../styles/darkModeButton.css'

export const ThemeToggleButton = () => {
  const button = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    button.current && button.current.classList.toggle('theme__icon_dark')
    document.getElementsByTagName('body')[0].classList.toggle('dark')
  }

  return (
    <button className="theme__icon" ref={ button } onClick={ handleClick }>
      <span></span>
      <span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
      <span></span>
    </button>
  )
}