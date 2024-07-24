import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export const Subtitle = () => {
  const subtitle = useRef(null)

  useEffect(() => {
    const typed = new Typed(subtitle.current, {
      strings: ['Optimized', 'Efficient', 'Clean'],
      typeSpeed: 100,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div style={ { fontSize: '30px', fontWeight: 'bold', letterSpacing: 2 } }>
      <span ref={ subtitle } />
    </div>
  )
}
