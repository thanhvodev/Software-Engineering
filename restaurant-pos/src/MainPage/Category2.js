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
                <Scrollbars style={{ width: "100vw", height: 500 }}>
                    <div id="foodrow">
                        <FoodComponent
                            id="2.1"
                            srcImg={chocolate}
                            stt="1."
                            name="Chocolate Cupcake"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.2"
                            srcImg={dragqueen}
                            stt="2."
                            name="Drag Queen Cupcake"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.3"
                            srcImg={loukoumades}
                            stt="3."
                            name="Loukoumades Cupcake"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.4"
                            srcImg={love}
                            stt="4."
                            name="Love Shake Cupcake"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.5"
                            srcImg={redvelvet}
                            stt="5."
                            name="Red Velvet Cupcake"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.6"
                            srcImg={single}
                            stt="6."
                            name="Single Perfect Cupcake"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.7"
                            srcImg={strawberry}
                            stt="7."
                            name="Strawberry Mango Margarhita Cupcake"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.8"
                            srcImg={vanilla}
                            stt="8."
                            name="Vanilla"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.9"
                            srcImg={chocolate}
                            stt="9."
                            name="Chocolate Cupcake 2"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.10"
                            srcImg={dragqueen}
                            stt="10."
                            name="Drag Queen Cupcake 2"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.11"
                            srcImg={loukoumades}
                            stt="11."
                            name="Loukoumades Cupcake 2"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.12"
                            srcImg={love}
                            stt="12."
                            name="Love Shake Cupcake 2"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.13"
                            srcImg={redvelvet}
                            stt="13."
                            name="Red Velvet Cupcake 2"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.14"
                            srcImg={single}
                            stt="14."
                            name="Single Perfect Cupcake 2"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.15"
                            srcImg={strawberry}
                            stt="15."
                            name="Strawberry Mango Margarhita Cupcake 2"
                            price="30.000 VND"
                        />
                        <FoodComponent
                            id="2.16"
                            srcImg={vanilla}
                            stt="16."
                            name="Vanilla 2"
                            price="30.000 VND"
                        />
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
}

export default Category2;
