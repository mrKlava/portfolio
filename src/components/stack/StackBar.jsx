import React from 'react'
import './stackbar.scss'

function StackBar({list}) {
  return (
    <div className="stack">
    <div className="stack-container">
      <ul className="stack-list">
          { list.map( (item, index) => {
              return <StackItem key={index} item={item} />
          } ) }
      </ul>
    </div>
  </div>
  )
}

export default StackBar

function StackItem({item}) {
    return (
        <li className='stack-list_item'>
            {item}
        </li>
    )
}