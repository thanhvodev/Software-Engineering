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
                <Scrollbars style={{ width: "100vw", height: "70vh" }}>
                    <div id="foodrow">
                        <FoodComponent
                            id="3.1"
                            srcImg={burger1}
                            stt="1."
                            name="Burger 1"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.2"
                            srcImg={burger2}
                            stt="2."
                            name="Burger 2"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.3"
                            srcImg={burger3}
                            stt="3."
                            name="Burger 3"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.4"
                            srcImg={burger4}
                            stt="4."
                            name="Burger 4"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.5"
                            srcImg={burger5}
                            stt="5."
                            name="Burger 5"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.6"
                            srcImg={burger6}
                            stt="6."
                            name="Burger 6"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.7"
                            srcImg={burger7}
                            stt="7."
                            name="Burger 7"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.8"
                            srcImg={burger8}
                            stt="8."
                            name="Burger 8"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.9"
                            srcImg={burger1}
                            stt="9."
                            name="Burger 9"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.10"
                            srcImg={burger2}
                            stt="2.10"
                            name="Burger 10"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.11"
                            srcImg={burger3}
                            stt="11."
                            name="Burger 11"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.12"
                            srcImg={burger4}
                            stt="12."
                            name="Burger 12"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.13"
                            srcImg={burger5}
                            stt="13."
                            name="Burger 13"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.14"
                            srcImg={burger6}
                            stt="6."
                            name="Burger 14"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.15"
                            srcImg={burger7}
                            stt="15."
                            name="Burger 15"
                            price="40.000 VND"
                        />
                        <FoodComponent
                            id="3.16"
                            srcImg={burger8}
                            stt="16."
                            name="Burger 16"
                            price="40.000 VND"
                        />
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
}

export default Category3;
