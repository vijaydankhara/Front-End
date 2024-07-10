import React from 'react'
// import img1 from "./image/image.png";

const Header = (props) => {
  return (
    <div>
      my name is {props.name} and my age is {props.age} and my city name is {props.city}

    </div>
  )
}

export default Header