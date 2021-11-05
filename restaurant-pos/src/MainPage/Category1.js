import React from 'react';
import FoodComponent from './FoodComponent';
import coca from '../img/coca.png'

function Category1() {
  return (
    <div id="Category1" className='category'>
      <p className='title-name'>Coca-Cola</p>
      <div id='foodrow'>
        <FoodComponent srcImg={coca} stt='1.' name='CoCa-Cola' price='15.000 VND' />
        <FoodComponent srcImg={coca} stt='2.' name='CoCa-Cola Vip-Pro' price='15.000 VND' />
        <FoodComponent srcImg={coca} stt='3.' name='Not CoCa-Cola' price='15.000 VND' />
        <FoodComponent srcImg={coca} stt='4.' name='CoCa-Cola Vip-Pro' price='15.000 VND' />
        <FoodComponent srcImg={coca} stt='5.' name='Not CoCa-Cola' price='15.000 VND' />
        <FoodComponent srcImg={coca} stt='6.' name='CoCa-Cola Delicous' price='15.000 VND' />
        <FoodComponent srcImg={coca} stt='7.' name='CoCa-Cola Number 1' price='15.000 VND' />
        <FoodComponent srcImg={coca} stt='8.' name='Pepsi' price='15.000 VND' />
      </div>
    </div>
  );
}

export default Category1;
