import React from 'react';
import CartElement from './CartElement'


const Cart = ({ isShowing, hide }) => {
    return (
        <div style={{ display: isShowing ? "block" : "none" }} >
            <CartElement hide={hide} />
        </div>
    );
}

export default Cart;
