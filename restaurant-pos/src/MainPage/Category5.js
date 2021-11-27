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
                            id="5.1"
                            srcImg={APPLEJUICE}
                            stt="1."
                            name="Apple Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.2"
                            srcImg={CARROTJUICE}
                            stt="2."
                            name="Carrot Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.3"
                            srcImg={MANGOJUICE}
                            stt="3."
                            name="Mango Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.4"
                            srcImg={ORANGEJUICE}
                            stt="4."
                            name="Orange Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.5"
                            srcImg={PAPAYAJUICE}
                            stt="5."
                            name="Papaya Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.6"
                            srcImg={PINEAPPLEJUICE}
                            stt="6."
                            name="Pineapple Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.7"
                            srcImg={STRAWBERRYJUICE}
                            stt="7."
                            name="Strawberry Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.8"
                            srcImg={WATERMELONJUICE}
                            stt="8."
                            name="Watermelon Juice"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.9"
                            srcImg={APPLEJUICE}
                            stt="9."
                            name="Apple Juice 2"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.10"
                            srcImg={CARROTJUICE}
                            stt="10."
                            name="Carrot Juice 2"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.11"
                            srcImg={MANGOJUICE}
                            stt="11."
                            name="Mango Juice 2"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.12"
                            srcImg={ORANGEJUICE}
                            stt="12."
                            name="Orange Juice 2"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.13"
                            srcImg={PAPAYAJUICE}
                            stt="13."
                            name="Papaya Juice 2"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.14"
                            srcImg={PINEAPPLEJUICE}
                            stt="14."
                            name="Pineapple Juice 2"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.15"
                            srcImg={STRAWBERRYJUICE}
                            stt="15."
                            name="Strawberry Juice 2"
                            price="50.000 VND"
                        />
                        <FoodComponent
                            id="5.16"
                            srcImg={WATERMELONJUICE}
                            stt="16."
                            name="Watermelon Juice 2"
                            price="50.000 VND"
                        />
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
}

export default Category5;
