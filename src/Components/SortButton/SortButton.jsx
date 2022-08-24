import React from 'react'
import './SortButton.css'

export const SortButton = (props) => {
  return (
    <div>
        <button className='sortBtn' onClick={props.onClick}>{props.btnName}</button>
    </div>
  )
}
