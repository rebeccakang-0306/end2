import React ,{ useState }from "react";

import { addReceipt } from "../api";
import Button from "../components/Button";
import "../styles/styles.css"

export default function AddReceiptUserpage() {
    const buyerID = window.location.href.split("/").pop();
    const [shop, setShop] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [showForm, setShowForm] = useState(false);

    function onSubmit() {
        addReceipt({
            buyerID,
            shop,
            description,
            price,
            category,
            date
        });
    }

    if(!showForm){
        return(
            <Button className={"btn-success"} onClick={() => setShowForm(!showForm)}>
                {showForm ? "-" : "Add New Receipt"}
            </Button>
        )
    }
    else{

    return (
        <div className="addAuthor">
            Add New Receipt
            <form>
                <input
                    type="text"
                    placeholder="Shop"
                    name="shop"
                    value={shop}
                    onChange={event => {
                        setShop(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={event => {
                        setDescription(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    value={price}
                    onChange={event => {
                        setPrice(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    value={category}
                    onChange={event => {
                        setCategory(event.target.value);
                    }}
                />
                <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={date}
                    onChange={event => {
                        setDate(event.target.value);
                    }}
                />
                <Button className={"btn-success"} onClick={onSubmit}>
                    Add
                </Button>
                <Button className={"btn-cancel"} onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Cancel" : "Create"}
                </Button>
            </form>
        </div>
    );}
}
