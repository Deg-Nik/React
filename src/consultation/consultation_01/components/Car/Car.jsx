import React from 'react'

export default function Car(props) {
  const {brand, color, image} = props;

  return (
    <div style={{backgroundColor: color, color: "white"}}>
      Brand: {brand}
      Color: {color}
      <img src="" alt="" />
    </div>
  )
}
