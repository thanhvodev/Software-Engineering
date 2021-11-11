import React from "react";
import FoodComponent from "./FoodComponent";
import coca from "../img/coca.png";
import cocazero from "../img/GasDrinks/COCAZERO-12.jpg";
import fanta from "../img/GasDrinks/FANTA-12.jpg";
import mirinda from "../img/GasDrinks/MIRINDA-12.jpg";
import moutaindew from "../img/GasDrinks/MOUNTAINDEW-12.jpg";
import pepsi from "../img/GasDrinks/PEPSI-12.jpg";
import redbull from "../img/GasDrinks/REDBULL-12.jpg";
import sprite from "../img/GasDrinks/SPRITE-12.jpg";
import { Scrollbars } from "react-custom-scrollbars";
import MainPage from "./MainPage";

function Category1() {
    return (
        <div id="Category1" className="category">
            <MainPage />
            <p className="title-name">Gas Drinks</p>
            <Scrollbars style={{ width: 1500, height: 500 }}>
                <div id="abcd">
                    <div id="foodrow">
                        <FoodComponent id="1" srcImg={coca} stt="1." name="CoCa-Cola" price="15.000 VND" />
                        <FoodComponent id="2" srcImg={cocazero} stt="2." name="CoCa-Cola Zero" price="15.000 VND" />
                        <FoodComponent id="3" srcImg={fanta} stt="3." name="Fanta" price="15.000 VND" />
                        <FoodComponent id="4" srcImg={mirinda} stt="4." name="Mirinda" price="15.000 VND" />
                        <FoodComponent id="5" srcImg={moutaindew} stt="5." name="Moutaindew" price="15.000 VND" />
                        <FoodComponent id="6" srcImg={pepsi} stt="6." name="Pepsi" price="15.000 VND" />
                        <FoodComponent id="7" srcImg={redbull} stt="7." name="Redbull" price="15.000 VND" />
                        <FoodComponent id="8" srcImg={sprite} stt="8." name="Sprite" price="15.000 VND" />
                    </div>
                </div>
            </Scrollbars>
        </div>
    );
}

export default Category1;
