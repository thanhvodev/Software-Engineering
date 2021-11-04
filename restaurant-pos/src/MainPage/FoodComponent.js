import React from "react";
import { NavLink } from "react-router-dom"
import cart from '../img/cart.png'

function FoodComponent({
    srcImg,
    stt,
    name,
    price
}) {
    return (
        <div id='FoodComponent'>

            <img id='foodimage' src={srcImg} alt='Food Image' width='200px' height='200px'/>
            <p id='foodname'>
                <span id='foodstt'>{stt}</span>
                <span> </span>
                <span id= 'foodname-inside'>{name}</span>
            </p>

            <div id='price-and-cart'>
                <p id='foodprice'>{price}</p>
                <img id='cartIcon' src={cart} alt='Cart Icon' width='50px' height='50px' />
            </div>
        
        </div>
    )
}
export default FoodComponent;