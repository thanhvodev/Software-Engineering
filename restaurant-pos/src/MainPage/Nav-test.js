import React from 'react';
import { Link } from 'react-router-dom';
import coca from '../img/coca.png'
import cupcake from '../img/cupcake.png'
import french from '../img/frenchfries.png'
import juice from '../img/juice.png'
import seafood from '../img/seafood.png'

function Nav() {
    return (
        <div className="Navigation">
            <ul>
                <Link to="/category1">
                    <img id='coca' src={coca} alt='Coca-Cola' width='70px' height='70px' />
                </Link>
                <Link to="/category2">
                    <img id='cupcake' src={cupcake} alt='Cupcake' width='70px' height='70px' />
                </Link>
                <Link to="/category3">
                    <img id='french' src={french} alt='French Fries' width='70px' height='70px' />
                </Link>
                <Link to="/category5">
                    <img id='juice' src={juice} alt='Juice' width='70px' height='70px' />
                </Link>
                <Link to="/category6">
                    <img id='seefood' src={seafood} alt='Seafood' width='70px' height='70px' />
                </Link>
            </ul>
        </div>
    );
}

export default Nav;
