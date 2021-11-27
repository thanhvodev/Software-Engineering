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
        <div className="menu">
            <MainPage />
            <div id="Category1" className="category">
                <p className="title-name">Gas Drinks</p>
                <div id="foodrow-wrap">
                    <Scrollbars style={{ width: "100vw", height: "70vh" }}>
                        <div id="foodrow">
                            <FoodComponent
                                id="1.1"
                                srcImg={coca}
                                stt="1."
                                name="CoCa-Cola"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.2"
                                srcImg={cocazero}
                                stt="2."
                                name="CoCa-Cola Zero"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.3"
                                srcImg={fanta}
                                stt="3."
                                name="Fanta"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.4"
                                srcImg={mirinda}
                                stt="4."
                                name="Mirinda"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.5"
                                srcImg={moutaindew}
                                stt="5."
                                name="Moutaindew"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.6"
                                srcImg={pepsi}
                                stt="6."
                                name="Pepsi"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.7"
                                srcImg={redbull}
                                stt="7."
                                name="Redbull"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.8"
                                srcImg={sprite}
                                stt="8."
                                name="Sprite"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.9"
                                srcImg={coca}
                                stt="9."
                                name="CoCa-Cola"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.10"
                                srcImg={cocazero}
                                stt="10."
                                name="CoCa-Cola Zero"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.11"
                                srcImg={fanta}
                                stt="11."
                                name="Fanta"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.12"
                                srcImg={mirinda}
                                stt="12."
                                name="Mirinda"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.13"
                                srcImg={moutaindew}
                                stt="13."
                                name="Moutaindew"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.14"
                                srcImg={pepsi}
                                stt="14."
                                name="Pepsi"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.15"
                                srcImg={redbull}
                                stt="15."
                                name="Redbull"
                                price="15.000 VND"
                            />
                            <FoodComponent
                                id="1.16"
                                srcImg={sprite}
                                stt="16."
                                name="Sprite"
                                price="15.000 VND"
                            />
                        </div>
                    </Scrollbars>
                </div>
            </div>
        </div>
    );
}

export default Category1;
