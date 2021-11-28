import Modal from "react-modal";

const customStyles = {
    content: {
        display: "flex",
        flexDirection: "column",
        width: "50vw",
        height: "70vh",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

const addCart = (id, name, srtImg, quantity, price) => {
    if (quantity === 0) {
        document.cookie = id + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } else {
        document.cookie = id + "=" + name + "," + srtImg + "," + quantity + "," + price;
    }
};

const Modalinfo = ({ isShowing, hide, id, srcImg, name, price }) => {
    return (
        <div>
            <Modal isOpen={isShowing} onRequestClose={hide} style={customStyles} price={price}>
                <div className="d-flex align-items-start">
                    <h3>ADD TO CART </h3>
                    <button className="ms-auto" onClick={hide}>
                        &times;
                    </button>
                </div>
                <hr />
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-3">
                            <img src={srcImg} className="img-thumbnail" alt="item" />{" "}
                        </div>
                        <div className="col-9 d-flex flex-column justify-content-between">
                            <p>Name: {name} </p>
                            <hr />
                            <p>Protein: lorem ipsum dolor sit amet</p>
                            <p>Additives: lorem ipsum dolor sit amet</p>
                            <p>Baking materials: lorem ipsum dolor sit amet</p>
                            <p>Food decoration: lorem ipsum dolor sit amet</p>
                            <button
                                type="button"
                                class="btn btn-danger w-100"
                                onClick={() => {
                                    addCart(id, name, srcImg, 1, price);
                                    hide();
                                }}
                            >
                                {price}
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Modalinfo;
