import React ,{ useState }from "react";

import { addReceipt } from "../api";
import Button from "../components/Button";

export default function Header() {
    const [buyerID, setBuyerID] = useState("");
    const [shop, setShop] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

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

    return (
        <div className="addAuthor">
            Add New Receipt
            <form>
                <input
                    type="text"
                    placeholder="BuyerID"
                    name="buyerID"
                    value={buyerID}
                    onChange={event => {
                        setBuyerID(event.target.value);
                    }}
                />
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
            </form>
        </div>
    );
}
