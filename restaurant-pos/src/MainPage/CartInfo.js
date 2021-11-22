import React, { useContext, useEffect } from "react";
import { UserContext } from "../components/UserContext";
import firebase from "../components/firebase";
import { func } from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const addCart = (id, name, srtImg, quantity, price) => {
    if (quantity === 0) {
        document.cookie = id + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    else {
        document.cookie = id + '=' + name + ',' + srtImg + ',' + quantity + ',' + price;
    }
}


const deleteAllCookies = () => {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}


const CartInfo = () => {

    const id = localStorage.getItem("id")
        ? JSON.parse(localStorage.getItem("id"))
        : "";

    const point = localStorage.getItem("point")
        ? JSON.parse(localStorage.getItem("point"))
        : "";


    const { user, setUser } = useContext(UserContext);
    const [isChange, setIsChange] = useState(false);
    const [isDis, setIsDis] = useState(false);

    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    ca.sort(function (a, b) { return a.split('=')[0] - b.split('=')[0] });

    let rs = [];

    let sum = 0;

    for (let i = 0; i < ca.length; i++) {
        ca[i].trim();
        if (ca[i] === '') break;
        let y = ca[i].split('=');
        let x = y[1].split(',');

        let prc = parseInt(x[3].replace('.', '')) * parseInt(x[2].replace('.', ''));
        sum += prc;
        prc = prc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'

        rs.push(
            <div className="row">
                <div className="col-3">
                    <img src={x[1]} className="img-thumbnail" alt="item" />
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-12">
                            <p>{x[0]}</p>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-light"
                                onClick={() => {
                                    addCart(y[0], x[0], x[1], parseInt(x[2]) - 1, x[3]); setIsChange(!isChange)
                                }}>-</button>
                        </div>
                        <div className="col-1">
                            <p className="d-inline-block">{x[2]}</p>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-light"
                                onClick={() => {
                                    addCart(y[0], x[0], x[1], parseInt(x[2]) + 1, x[3]); setIsChange(!isChange)
                                }}> +</button>
                        </div>
                        <div className="col-7 text-end">
                            <p className="text-danger">{prc}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const numsum = sum;
    const numsumString = numsum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND';
    const numsumDis = sum * 0.95;
    const numsumDisString = numsumDis.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND';

    let pay = isDis ? numsumDis : numsum;
    sum = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND';


    rs.push(
        <div>
            <hr className="mb-4" style={{ height: '5px' }} />

            <div className="d-flex justify-content-between px-x">
                <p className="fw-bold">Total:</p>
                <p className="fw-bold">{!isDis ? numsumString : numsumDisString}</p>
            </div>
            <input id="discount" type="checkbox" onClick={() => { setIsDis(!isDis); }} />
            <label for="discount">Dùng 5000 điểm để giảm 5.000đ?</label>

            <div className="d-flex justify-content-between p-2 mb-2">

                <Link to={
                    {
                        pathname: '/paypal',
                        state: {
                            value: { pay }
                        }
                    }
                } >
                    <button type="button" class="btn btn-danger w-100" onClick={async () => {
                        if (user && !isDis) {
                            await setUser({ ...user, discount: point + numsum * 0.05 });
                            localStorage.setItem("point", JSON.stringify(point + numsum * 0.05))
                            const userd = firebase.database().ref("Accounts").child(id);
                            await userd.update({
                                dispoint: point + numsum * 0.05,
                            });

                            localStorage.setItem("point", point + numsum * 0.05);
                        } else if (!user && isDis) {
                            alert("Only user can use discount. Your charge will be the same!");
                            setIsDis(false);
                        } else if (user && isDis && point < 5000) {
                            alert("Not enough discount point. Your charge will be the same!");
                            setIsDis(false);
                        } else if (user && isDis && point >= 5000) {
                            await setUser({ ...user, discount: point + numsum * 0.04 - 5000 });
                            localStorage.setItem("point", JSON.stringify(point + numsum * 0.04 - 5000))
                            const userd = firebase.database().ref("Accounts").child(id);
                            await userd.update({
                                dispoint: point + numsum * 0.04 - 5000,
                            });
                        }
                    }}>Payment</button>
                </Link>
            </div>
        </div >
    )

    return (rs);
}

export default CartInfo;