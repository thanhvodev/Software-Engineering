import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import FoodComponent from "./FoodComponent";
import burger1 from "../img/Burger/Burgerbokhoaigiontranphomai.png";
import burger2 from "../img/Burger/BurgerBonuongKhoaitaylat.png";
import burger3 from "../img/Burger/Burgerbophomai.png";
import burger4 from "../img/Burger/BurgerBotamPhomai(M).png";
import burger5 from "../img/Burger/BurgerSiennhanphomai(M).png";
import burger6 from "../img/Burger/BurgerSiennhanphomaibodeluxe(M).png";
import burger7 from "../img/Burger/BurgerWhopperbo.png";
import burger8 from "../img/Burger/BurgerWhopperboSiennhanphomai(M).png";
import MainPage from "./MainPage";

function Category3() {
    return (
        <div className="menu">
            <MainPage />
            <div id="Category3" className="category">
                <p className="title-name">Burgers</p>
                <Scrollbars style={{ width: "100vw", height: 500 }}>
                    <div id="foodrow">
                        <FoodComponent
                            id="17"
                            srcImg={burger1}
                            stt="1."
                            name="Burger 1"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="18"
                            srcImg={burger2}
                            stt="2."
                            name="Burger 2"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="19"
                            srcImg={burger3}
                            stt="3."
                            name="Burger 3"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="20"
                            srcImg={burger4}
                            stt="4."
                            name="Burger 4"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="21"
                            srcImg={burger5}
                            stt="5."
                            name="Burger 5"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="22"
                            srcImg={burger6}
                            stt="6."
                            name="Burger 6"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="23"
                            srcImg={burger7}
                            stt="7."
                            name="Burger 7"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="24"
                            srcImg={burger8}
                            stt="8."
                            name="Burger 8"
                            price="40.000 VND"
                        />
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
}

export default Category3;
