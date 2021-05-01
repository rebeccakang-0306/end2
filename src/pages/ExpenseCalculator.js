import React, { useState } from "react";
import {UserReceipt, updateReceipt, deleteReceipt, budget} from "../api";

import AddReceiptUserpage from "../components/AddReceiptUserpage";
import Button from "../components/Button";
import {Table, Tr} from "styled-table-component";
import CustomizedSelects from "../components/selectBox"
import "../styles/styles.css"
import {getID, getUsername, UserLoginState} from "../components/CurrentUser"
import Login from "../components/Login";
import {Redirect} from "react-router-dom";
import Image from "react-bootstrap/Image";
import dog1 from "../assets/dog1.jpg";

export default function ExpenseCalculator() {
    let buyerID = getID();
    if (buyerID === "personalpage"){
        buyerID = "";
    }
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [loading, setLoading] = useState(true);
    const [receipts, setReceipts] = useState([]);
    let spending = 0;

    function onSubmit() {
        budget({
            buyerID,
            startDate,
            endDate
        }).then(res=> {
            if (res != null){
                setReceipts(res);
                setLoading(false);
            }});

    }

    const CalcSpending = function(){if(receipts.length > 0){
        let tempSpending = 0;
        for(let i = 0; i < receipts.length; i++){
            tempSpending += receipts[i]['Price'];
        }
        return tempSpending;
    }}

    if(UserLoginState() === 'false'){
        return (
            <Redirect to={"/signin"} />
        )
    }

    if(receipts.length > 0){
        spending = CalcSpending();
    }

    return (
        <div>
            <h1>Survey Finished</h1>
            <h6 className={"Welcome"}> <b>Thanks! {getUsername()}</b></h6>
            <div className = "TextBlock">
                <div className="alert">
                   Thanks for participating the surveys! Your result has been saved.
                </div>
                <Image src="https://ak.imgag.com/product/flash/3468269/master.jpg"/>


            </div>
        </div>
    );
}


/*
// Display a list of the receipts
return (
    <div>
        <h1>Expense Calculator</h1>
        <h6 className={"Welcome"}> <b>Welcome! {getUsername()}</b></h6>
        <br/>
        <div className = "TextBlock">
            <div className="addAuthor">
                Please select date range
                <div>
                    <input
                        type="date"
                        placeholder="StartDate"
                        name="startDate"
                        value={startDate}
                        onChange={event => {
                            setStartDate(event.target.value);
                        }}
                    />
                    <input
                        type="date"
                        placeholder="EndDate"
                        name="endDate"
                        value={endDate}
                        onChange={event => {
                            setEndDate(event.target.value);
                        }}
                    />
                    <Button className={"btn-success"} onClick={onSubmit}>
                        Find
                    </Button>
                </div>
            </div>
            <div className="Spending"> Total Expenses for this period : ${spending} </div>
        </div>
        <Table className="receipt-table">
            <thead>
            <tr>
                <th scope="col">ReceiptID</th>
                <th scope="col">shop</th>
                <th scope="col">description</th>
                <th scope="col">price</th>
                <th scope="col">category</th>
                <th scope="col">date</th>
            </tr>
            </thead>
            <tbody>
            {receipts.map(receipt => {

                return <Tr active key={receipt._id}>
                    <td>{receipt._id}</td>
                    <td>{receipt.shop}</td>
                    <td>{receipt.description}</td>
                    <td>${receipt.Price}</td>
                    <td>{receipt.category}</td>
                    <td>{receipt.date.split("T")[0]}</td>
                </Tr>
            })}
            </tbody>
        </Table>
    </div>
);
}

 */
