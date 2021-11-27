import firebase from "firebase";
import CancleRes from "./cancleRes";

const Checktime = () => {
    /* _________________________Check tine_________________________ */
    const d = new Date();

    var current_date = d.getDate();
    var current_month = d.getMonth() + 1;
    var current_year = d.getFullYear();
    var current_hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    var current_minute = d.getMinutes();

    const date = localStorage.getItem("z_tableRes_date")
        ? JSON.parse(localStorage.getItem("z_tableRes_date"))
        : "";
    const time = localStorage.getItem("z_tableRes_time")
        ? JSON.parse(localStorage.getItem("z_tableRes_time"))
        : "";

    if (current_year > date.split("/")[2]) {
        CancleRes();
    } else if (current_year == date.split("/")[2] && current_month > date.split("/")[1]) {
        CancleRes();
    } else if (
        current_year == date.split("/")[2] &&
        current_month == date.split("/")[1] &&
        current_date > date.split("/")[0]
    ) {
        CancleRes();
    } else if (
        current_year == date.split("/")[2] &&
        current_month == date.split("/")[1] &&
        current_date == date.split("/")[0] &&
        current_hour > time.split(":")[0]
    ) {
        CancleRes();
    } else if (
        current_year == date.split("/")[2] &&
        current_month == date.split("/")[1] &&
        current_date == date.split("/")[0] &&
        current_hour == time.split(":")[0] &&
        current_minute > time.split(":")[1].split(" ")[0]
    ) {
        CancleRes();
    }

    /* __________________________________________________________ */
};

export default Checktime;
