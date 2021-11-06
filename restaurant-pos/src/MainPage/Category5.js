import React from 'react';
import FoodComponent from './FoodComponent';
import juice from '../img/juice.png'


function Category5() {
  return (
    <div id="Category5" className='category'>
      <p className='title-name'>Juice</p>
      <div id='foodrow'>
        <FoodComponent id='25' srcImg={juice} stt='1.' name='Juice' price='50.000 VND' />
        <FoodComponent id='26' srcImg={juice} stt='2.' name='Juice Vip-Pro' price='50.000 VND' />
        <FoodComponent id='27' srcImg={juice} stt='3.' name='Not Juice' price='50.000 VND' />
        <FoodComponent id='28' srcImg={juice} stt='4.' name='Juice Vip-Pro' price='50.000 VND' />
        <FoodComponent id='29' srcImg={juice} stt='5.' name='Not Juice' price='50.000 VND' />
        <FoodComponent id='30' srcImg={juice} stt='6.' name='Juice Delicous' price='50.000 VND' />
        <FoodComponent id='31' srcImg={juice} stt='7.' name='Juice Number 1' price='50.000 VND' />
        <FoodComponent id='32' srcImg={juice} stt='8.' name='Pepsi' price='50.000 VND' />
      </div>
    </div>
  );
}

export default Category5;
