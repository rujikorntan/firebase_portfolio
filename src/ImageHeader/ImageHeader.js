import React from 'react';
import './ImageHeader.css';
import Particles from 'react-particles-js';

const particleOption = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    move :{
      speed : 2,
    },
  }

}
const ImageHeader = () => {
  return (
    <div className="container-image">
      <div className="bg-gredient ma-bbtom white" style={{height:'755px'}} >
        <Particles className="bg-particle " params={particleOption} />
        <img src='https://i.imgur.com/QtUIRO4.jpg?1' alt='profile' className='img-profile centered-img '/>
        <h1 className="centered-txt white ">RUJIKORN YOOCHAROENSUB</h1>
        <h3 className="centered-txt-web white ">Web Developer</h3>
      </div>
    </div>

  )
}
export default ImageHeader;