import React ,{ useState }from "react";

import { createSurvey } from "../api";
import Button from "../components/Button";
import "../styles/styles.css"

export default function AddSurveyUserpage() {
    const userid = window.location.href.split("/").pop();
    const usertype = window.location.href.split("/").pop();
    const [v1, setv1] = useState("");
    const [v2, setv2] = useState("");
    const [v3, setv3] = useState("");
    const [v4, setv4] = useState("");
    const [v5, setv5] = useState("");
    const [v6, setv6] = useState("");
    const [v7, setv7] = useState("");
    const [v8, setv8] = useState("");
    const [v9, setv9] = useState("");
    const [showForm, setShowForm] = useState(false);

    function onSubmit() {
        createSurvey({
            userid,
            usertype,
            v1,
            v2,
            v3, v4,v5,
            v6,v7,v8,v9
        });
    }

    if(!showForm){
        return(
            <Button className={"btn-success"} onClick={() => setShowForm(!showForm)}>
                {showForm ? "-" : "Add New Survey"}
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
                    value={v1}
                    onChange={event => {
                        setv1(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={v2}
                    onChange={event => {
                        setv2(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    value={v3}
                    onChange={event => {
                        setv3(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    value={v4}
                    onChange={event => {
                        setv4(event.target.value);
                    }}
                />
                <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={v5}
                    onChange={event => {
                        setv5(event.target.value);
                    }}
                />
                <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={v6}
                    onChange={event => {
                        setv6(event.target.value);
                    }}
                />
                <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={v7}
                    onChange={event => {
                        setv7(event.target.value);
                    }}
                />
                <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={v8}
                    onChange={event => {
                        setv8(event.target.value);
                    }}
                />
                <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={v9}
                    onChange={event => {
                        setv9(event.target.value);
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
