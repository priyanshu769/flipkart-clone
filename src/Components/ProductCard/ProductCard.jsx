import React from 'react'
import './ProductCard.css'

export const ProductCard = (props) => {
  return (
    <div className='productCard'>
      <div className='productImgContainer'>
        <img className='productImg' alt={props.productName} src={props.productImg} />
      </div>
      <div className='productDetailsContainer'>
        <p className='productBrandName'>{props.productBrandName}</p>
        <p className='productName'>{props.productName}</p>
        <p className='prodcutPrice'>Rs. {props.prodcutPrice}</p>
      </div>
    </div>
  )
}
