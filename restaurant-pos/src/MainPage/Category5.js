import React from "react";
import FoodComponent from "./FoodComponent";
import { Scrollbars } from "react-custom-scrollbars";
import APPLEJUICE from "../img/Juice/APPLEJUICE-20.jpg";
import CARROTJUICE from "../img/Juice/CARROTJUICE-20.jpg";
import MANGOJUICE from "../img/Juice/MANGOJUICE-20.jpg";
import ORANGEJUICE from "../img/Juice/ORANGEJUICE-20.jpg";
import PAPAYAJUICE from "../img/Juice/PAPAYAJUICE-20.jpg";
import PINEAPPLEJUICE from "../img/Juice/PINEAPPLEJUICE-20.jpg";
import STRAWBERRYJUICE from "../img/Juice/STRAWBERRYJUICE-20.jpg";
import WATERMELONJUICE from "../img/Juice/WATERMELONJUICE-20.jpg";
import MainPage from "./MainPage";

function Category5() {
    return (
        <div className="menu">
            <MainPage />
            <div id="Category5" className="category">
                <p className="title-name">Juice</p>
                <Scrollbars style={{ width: "100vw", height: 500 }}>
                    <div id="foodrow">
                        <FoodComponent
                            id="25"
                            srcImg={APPLEJUICE}
                            stt="1."
                            name="Apple Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="26"
                            srcImg={CARROTJUICE}
                            stt="2."
                            name="Carrot Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="27"
                            srcImg={MANGOJUICE}
                            stt="3."
                            name="Mango Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="28"
                            srcImg={ORANGEJUICE}
                            stt="4."
                            name="Orange Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="29"
                            srcImg={PAPAYAJUICE}
                            stt="5."
                            name="Papaya Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="30"
                            srcImg={PINEAPPLEJUICE}
                            stt="6."
                            name="Pineapple Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="31"
                            srcImg={STRAWBERRYJUICE}
                            stt="7."
                            name="Strawberry Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="32"
                            srcImg={WATERMELONJUICE}
                            stt="8."
                            name="Watermelon Juice"
                            price="50.000 VND"
                        />
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
}

export default Category5;
