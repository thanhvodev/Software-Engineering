import React from 'react';
import french from '../img/frenchfries.png'
import FoodComponent from './FoodComponent';

function Category3() {
  return (
    <div id="Category3" className='category'>
        <p className='title-name'>French Fries</p>
        <div id='foodrow'>
            <FoodComponent srcImg={french} stt='1.' name='French Fries' price='40.000 VND' />
            <FoodComponent srcImg={french} stt='2.' name='French Fries Vip-Pro' price='40.000 VND' />
            <FoodComponent srcImg={french} stt='3.' name='Not French Fries' price='40.000 VND' />
            <FoodComponent srcImg={french} stt='4.' name='French Fries Vip-Pro' price='40.000 VND' />
            <FoodComponent srcImg={french} stt='5.' name='Not French Fries' price='40.000 VND' />
          </div>
          <div id='foodrow'>
            <FoodComponent srcImg={french} stt='6.' name='French Fries Delicous' price='40.000 VND' />
            <FoodComponent srcImg={french} stt='7.' name='French Fries Number 1' price='40.000 VND' />
            <FoodComponent srcImg={french} stt='8.' name='Pepsi' price='40.000 VND' />
            <FoodComponent srcImg={french} stt='9.' name='French Fries Number 1' price='40.000 VND' />
            <FoodComponent srcImg={french} stt='10.' name='Pepsi' price='40.000 VND' />
          </div>
    </div>
  );
}

export default Category3;
