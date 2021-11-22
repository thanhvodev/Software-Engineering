import React from "react";
import FoodComponent from "./FoodComponent";
import { Scrollbars } from "react-custom-scrollbars";
import CA from "../img/Seafood/CA.png";
import CUA from "../img/Seafood/CUA.png";
import MUCBACHTUOC from "../img/Seafood/MUCBACHTUOC.png";
import OCSO from "../img/Seafood/OCSO.png";
import TOM from "../img/Seafood/TOM.png";
import TOMHUM from "../img/Seafood/TOMHUM.png";
import MainPage from "./MainPage";

function Category6() {
    return (
        <div className="menu">
            <MainPage />
            <div id="Category6" className="category">
                <p className="title-name">Seafood</p>
                <Scrollbars style={{ width: "100vw", height: 500 }}>
                    <div id="foodrow">
                        <FoodComponent
                            id="33"
                            srcImg={CA}
                            stt="1."
                            name="Seafood 1"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="34"
                            srcImg={CUA}
                            stt="2."
                            name="Seafood 2"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="35"
                            srcImg={MUCBACHTUOC}
                            stt="3."
                            name="Seafood 3"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="36"
                            srcImg={CA}
                            stt="4."
                            name="Seafood 4"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="37"
                            srcImg={TOM}
                            stt="5."
                            name="Seafood 5"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="38"
                            srcImg={TOM}
                            stt="6."
                            name="Seafood 6"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="39"
                            srcImg={OCSO}
                            stt="7."
                            name="Seafood 7"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="40"
                            srcImg={TOMHUM}
                            stt="8."
                            name="Seafood 8"
                            price="120.000 VND"
                        />
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
}

export default Category6;
