import React from "react";
import cart from '../img/cart.png'
import Modal from "./Modalinfo";
import useModal from './useModal';

function FoodComponent({
    id,
    srcImg,
    stt,
    name,
    price
}) {
    const { isShowing, toggle } = useModal();
    return (
        <div id='FoodComponent'>
            <Modal
                isShowing={isShowing}
                hide={toggle}
                id={id}
                srcImg={srcImg}
                name={name}
                price={price}
            />
            <img id='foodimage' src={srcImg} alt='Food' width='auto' height='200px' />
            <p id='foodname'>
                <span id='foodstt'>{stt}</span>
                <span> </span>
                <span id='foodname-inside'>{name}</span>
            </p>

            <div id='price-and-cart'>
                <p id='foodprice'>{price}</p>
                <img id='cartIcon' onClick={toggle} src={cart} alt='Cart Icon' width='40px' height='40px' />
            </div>

        </div>
    )
}
export default FoodComponent;