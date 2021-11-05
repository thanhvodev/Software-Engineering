import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Navtest from './Nav-test';
import Category1 from './Category1';
import Category2 from './Category2';
import Category3 from './Category3';
import Category6 from './Category6';
import Category5 from './Category5';
import home from '../img/home.png'
import cart from '../img/cart.svg'
import './MainPage.css'
import useCart from './useCart';
import Cart from '../MainPage/Cart'

function MainPage() {
    const { isShowing, toggle } = useCart(false);
    return (
        <div className="fluid-container">
            <div className="row">
                <div>
                    <Router>
                        <div className="MainPage">
                            <div className="fluid-container">
                                <div className="row">
                                    <div id='Backtohome' className="col-10">
                                        <img id='home' src={home} alt='Home Icon' width='50px' height='50px' />
                                        <p>Back to Home</p>
                                    </div>
                                    <button type="button" className="btn btn-secondary col-2" onClick={toggle}><img src={cart} alt='cart icon' width='25px' height='25px' /></button>
                                </div>
                            </div>
                            <div id='maincontent'>
                                <Navtest />
                                <Switch>
                                    <Route path="/category1" exact component={Category1} />
                                    <Route path="/category2" exact component={Category2} />
                                    <Route path="/category3" exact component={Category3} />
                                    <Route path="/category5" exact component={Category5} />
                                    <Route path="/category6" exact component={Category6} />
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </div>
                <div>
                    <Cart isShowing={isShowing} hide={toggle} />
                </div>
            </div>
        </div>

    );
}

export default MainPage;
