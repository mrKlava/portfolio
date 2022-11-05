import React from 'react'
import './button.scss'

function Button({children, className='primary', onClick}) {
  return (
    <button onClick={onClick} className={`button --${className}`}>
      {children}
    </button>
  )
}

export default Button