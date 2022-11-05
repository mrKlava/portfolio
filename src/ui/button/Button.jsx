import React from 'react'
import './button.scss'

function Button({children, type='primary'}) {
  return (
    <button className={`button --${type}`}>
      {children}
    </button>
  )
}

export default Button