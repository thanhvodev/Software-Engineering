import React from 'react';
import cupcake from '../img/cupcake.png'
import FoodComponent from './FoodComponent';

function Category2() {
  return (
    <div id="Category2" className='category'>
      <p className='title-name'>Cupcake</p>
      <div id='foodrow'>
        <FoodComponent id='9' srcImg={cupcake} stt='1.' name='Cupcake' price='30.000 VND' />
        <FoodComponent id='10' srcImg={cupcake} stt='2.' name='Cupcake Vip-Pro' price='30.000 VND' />
        <FoodComponent id='11' srcImg={cupcake} stt='3.' name='Not Cupcake' price='30.000 VND' />
        <FoodComponent id='12' srcImg={cupcake} stt='4.' name='Cupcake Vip-Pro' price='30.000 VND' />
        <FoodComponent id='13' srcImg={cupcake} stt='5.' name='Not Cupcake' price='30.000 VND' />
        <FoodComponent id='14' srcImg={cupcake} stt='6.' name='Cupcake Delicous' price='30.000 VND' />
        <FoodComponent id='15' srcImg={cupcake} stt='7.' name='Cupcake Number 1' price='30.000 VND' />
        <FoodComponent id='16' srcImg={cupcake} stt='8.' name='Pepsi' price='30.000 VND' />
      </div>
    </div>
  );
}

export default Category2;
