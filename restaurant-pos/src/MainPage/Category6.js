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
                            id="6.1"
                            srcImg={CA}
                            stt="1."
                            name="Seafood 1"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.2"
                            srcImg={CUA}
                            stt="2."
                            name="Seafood 2"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.3"
                            srcImg={MUCBACHTUOC}
                            stt="3."
                            name="Seafood 3"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.4"
                            srcImg={CA}
                            stt="4."
                            name="Seafood 4"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.5"
                            srcImg={TOM}
                            stt="5."
                            name="Seafood 5"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.6"
                            srcImg={TOM}
                            stt="6."
                            name="Seafood 6"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.7"
                            srcImg={OCSO}
                            stt="7."
                            name="Seafood 7"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.8"
                            srcImg={TOMHUM}
                            stt="8."
                            name="Seafood 8"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.9"
                            srcImg={CA}
                            stt="9."
                            name="Seafood 9"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.10"
                            srcImg={CUA}
                            stt="10."
                            name="Seafood 10"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.11"
                            srcImg={MUCBACHTUOC}
                            stt="11."
                            name="Seafood 11"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.12"
                            srcImg={CA}
                            stt="12."
                            name="Seafood 12"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.13"
                            srcImg={TOM}
                            stt="13."
                            name="Seafood 13"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.14"
                            srcImg={TOM}
                            stt="14."
                            name="Seafood 14"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.15"
                            srcImg={OCSO}
                            stt="15."
                            name="Seafood 15"
                            price="120.000 VND"
                        />
                        <FoodComponent
                            id="6.16"
                            srcImg={TOMHUM}
                            stt="16."
                            name="Seafood 16"
                            price="120.000 VND"
                        />
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
}

export default Category6;
