import firebase from "firebase";

const CancleRes = () => {
    const id = localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : "";

    const userd = firebase.database().ref("Accounts").child(id);
    userd.update({
        Reservation_code: "0",
    });

    localStorage.setItem("Reservation_code", JSON.stringify("0"));
};

export default CancleRes;
