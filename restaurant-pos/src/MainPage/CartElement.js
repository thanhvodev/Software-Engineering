import React from 'react';
import cart from '../img/cart.svg'

const CartElement = ({ hide }) => {
    return (
        <div className="container cart">
            <div className="row">
                <div className="col-4 mt-2">
                    <img src={cart} alt='cart icon' width='25px' height='25px' />
                    <span>Your Cart</span>
                </div>
                <div className="col-4"></div>
                <button className="col-4 btn btn-secondary" onClick={hide}>Close</button>
            </div>
            <p>_____________________________________________________</p>
        </div>
    );
}

export default CartElement;
