import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import FoodComponent from "./FoodComponent";
import chocolate from "../img/Cupcake/Chocolate-Cupcakes.jpg";
import dragqueen from "../img/Cupcake/Drag-Queen-Cupcakes.jpg";
import loukoumades from "../img/Cupcake/Loukoumades-Cupcakes.jpg";
import redvelvet from "../img/Cupcake/Red-Velvet-Cupckes.jpg";
import single from "../img/Cupcake/Single_perfect-Cupcake.jpg";
import strawberry from "../img/Cupcake/Strawberry-Mango-Margarhita-Cupcakes.jpg";
import vanilla from "../img/Cupcake/Vanilla-Cupcakes.jpg";
import love from "../img/Cupcake/Love-Shake-Freakshake-Cupcakes.jpg";
import MainPage from "./MainPage";

function Category2() {
    return (
        <div className="menu">
            <MainPage />
            <div id="Category2" className="category">
                <p className="title-name">Cupcake</p>
                <Scrollbars style={{ width: 1500, height: 500 }}>
                    <div id="foodrow">
                        <FoodComponent id="9" srcImg={chocolate} stt="1." name="Chocolate Cupcake" price="30.000 VND" />
                        <FoodComponent id="10" srcImg={dragqueen} stt="2." name="Drag Queen Cupcake" price="30.000 VND" />
                        <FoodComponent id="11" srcImg={loukoumades} stt="3." name="Loukoumades Cupcake" price="30.000 VND" />
                        <FoodComponent id="12" srcImg={love} stt="4." name="Love Shake Cupcake" price="30.000 VND" />
                        <FoodComponent id="13" srcImg={redvelvet} stt="5." name="Red Velvet Cupcake" price="30.000 VND" />
                        <FoodComponent id="14" srcImg={single} stt="6." name="Single Perfect Cupcake" price="30.000 VND" />
                        <FoodComponent id="15" srcImg={strawberry} stt="7." name="Strawberry Mango Margarhita Cupcake" price="30.000 VND" />
                        <FoodComponent id="16" srcImg={vanilla} stt="8." name="Vanilla" price="30.000 VND" />
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
}

export default Category2;
