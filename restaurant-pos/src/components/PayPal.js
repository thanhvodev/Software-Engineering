import './PayPal.css';
import React from "react";
import ReactDOM from "react-dom"
import { Link, useLocation } from "react-router-dom";

//Nut thanh toan
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PayPal() {
    let location = useLocation();
    console.log(location);
    const USD2VND = 1 / 22652;
    const totalPay = Math.round(location.state.value.pay * USD2VND * 100) / 100;
    //alert(totalPay);

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: totalPay,
                    },
                },
            ],
        });
    };

    //Pay now =>
    const onApprove = (data, actions) => {
        return actions.order.capture();
    };
    // 
    const onCancel = () => {
        alert("Canceled");
    };
    const onError = (err) => {
        alert(err);
    };

    return (
        <div className="paypal">
            <div className="wrapper">
                <PayPalButton
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                    onCancel={() => onCancel()}
                    onError={(err) => onError(err)}
                />
            </div>
            <div>
                <Link to={
                    {
                        pathname: '/',
                    }
                } >
                    <button>Home</button>
                </Link>
            </div>
        </div>
    );
}

export default PayPal