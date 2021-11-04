import React from 'react';
import cupcake from '../img/cupcake.png'
import FoodComponent from './FoodComponent';

function Category2() {
  return (
    <div id="Category2" className='category'>
        <p className='title-name'>Cupcake</p>
        <div id='foodrow'>
            <FoodComponent srcImg={cupcake} stt='1.' name='Cupcake' price='30.000 VND' />
            <FoodComponent srcImg={cupcake} stt='2.' name='Cupcake Vip-Pro' price='30.000 VND' />
            <FoodComponent srcImg={cupcake} stt='3.' name='Not Cupcake' price='30.000 VND' />
            <FoodComponent srcImg={cupcake} stt='4.' name='Cupcake Vip-Pro' price='30.000 VND' />
            <FoodComponent srcImg={cupcake} stt='5.' name='Not Cupcake' price='30.000 VND' />
          </div>
          <div id='foodrow'>
            <FoodComponent srcImg={cupcake} stt='6.' name='Cupcake Delicous' price='30.000 VND' />
            <FoodComponent srcImg={cupcake} stt='7.' name='Cupcake Number 1' price='30.000 VND' />
            <FoodComponent srcImg={cupcake} stt='8.' name='Pepsi' price='30.000 VND' />
            <FoodComponent srcImg={cupcake} stt='9.' name='Cupcake Number 1' price='30.000 VND' />
            <FoodComponent srcImg={cupcake} stt='10.' name='Pepsi' price='30.000 VND' />
          </div>
    </div>
  );
}

export default Category2;
