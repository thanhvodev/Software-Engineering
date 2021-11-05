import React from 'react';
import FoodComponent from './FoodComponent';
import seafood from '../img/seafood.png'

function Category6() {
  return (
    <div id="Category6" className='category'>
      <p className='title-name'>Seafood</p>
      <div id='foodrow'>
        <FoodComponent srcImg={seafood} stt='1.' name='Seafood' price='120.000 VND' />
        <FoodComponent srcImg={seafood} stt='2.' name='Seafood Vip-Pro' price='120.000 VND' />
        <FoodComponent srcImg={seafood} stt='3.' name='Not Seafood' price='120.000 VND' />
        <FoodComponent srcImg={seafood} stt='4.' name='Seafood Vip-Pro' price='120.000 VND' />
        <FoodComponent srcImg={seafood} stt='5.' name='Not Seafood' price='120.000 VND' />
        <FoodComponent srcImg={seafood} stt='6.' name='Seafood Delicous' price='120.000 VND' />
        <FoodComponent srcImg={seafood} stt='7.' name='Seafood Number 1' price='120.000 VND' />
        <FoodComponent srcImg={seafood} stt='8.' name='Pepsi' price='120.000 VND' />
      </div>
    </div>
  );
}

export default Category6;
