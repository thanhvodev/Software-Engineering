import firebase from "firebase";

function CancleRes() {
    const id = localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : "";

    const userd = firebase.database().ref("Accounts").child(id);
    userd.update({
        Reservation_code: "0",
        z_tableRes_party_size: 0,
        z_tableRes_date: "",
        z_tableRes_time: "",
        z_tableRes_firstname: "",
        z_tableRes_lastname: "",
        z_tableRes_mobile_number: "",
        z_tableRes_email: "",
        z_tableRes_comment: "",
    });

    localStorage.setItem("Reservation_code", JSON.stringify("0"));
}

export default CancleRes;
