import React from 'react'
import './button.scss'

function Button({children, type='primary', onClick}) {
  return (
    <button onClick={onClick} className={`button --${type}`}>
      {children}
    </button>
  )
}

export default Button