import React, { useState } from "react";
import {UserReceipt, updateReceipt, deleteReceipt, budget} from "../api";
import moment from 'moment'
import {setID, getID, UserLoginState, getUsername} from '../components/CurrentUser'

import AddReceiptUserpage from "../components/AddReceiptUserpage";
import Button from "../components/Button";
import {Table, Tr} from "styled-table-component";
import Login from "../components/Login"
import CustomizedSelects from "../components/selectBox"
import "../styles/styles.css"
import {Redirect} from "react-router-dom";

export default function MonthlySpending() {
    let buyerID = getID();
    if (buyerID === "personalpage"){
        buyerID = "";
    }
    const [displayDate, setDisplayDate] = useState(function (){
        let date = moment(new Date, 'YYYY-MM-DD').format().split("-");
        return date[0] + '-' + date[1];
    });
    const [startDate, setStartDate] = useState(function (){
        let tempDate = moment(new Date, 'YYYY-MM-DD').format().split("T")[0].split("-");
        let end = new Date(parseInt(tempDate[0]), parseInt(tempDate[1]) - 1 , 1);
        end = moment(end, 'YYYY-MM-DD').format().split("T")[0].split("-");
        return end[0]+ '-' + end[1] + '-' + end[2].split("T")[0];
    });
    const [endDate, setEndDate] = useState(function(){
        let tempDate = moment(new Date, 'YYYY-MM-DD').format().split("T")[0].split("-");
        let end = new Date(parseInt(tempDate[0]), parseInt(tempDate[1]) , 0);
        end = moment(end, 'YYYY-MM-DD').format().split("T")[0].split("-");
        return end[0]+ '-' + end[1] + '-' + end[2].split("T")[0];
    });
    const [loading, setLoading] = useState(true);
    const [receipts, setReceipts] = useState([]);
    const [firstLoad, setFirstLoad] = useState(false);
    let spending = 0;


    function onSubmit(query) {
        budget(query, this).then(res=> {
            if (res != null){
                setReceipts(res);
                setLoading(false);
            }});

    }

    const handleChange = (event) => {
        let date = event.target.value;
        setDisplayDate(date);
        let startDate = date + "-01";
        let tempDate = date.split("-");
        let endDate = new Date(parseInt(tempDate[0]), parseInt(tempDate[1]) , 0);
        endDate = moment(endDate, 'YYYY-MM-DD').format().split("T")[0];
        onSubmit({buyerID, startDate, endDate})

    };

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

    if(!firstLoad){
        setFirstLoad(true);
        onSubmit({buyerID, startDate, endDate});
    }



    // Display a list of the receipts
    return (
        <div>
            <h1>Your Receipts</h1>
            <h6 className={"Welcome"}> <b>Welcome! {getUsername()}</b></h6>
            <br/>
            <div className = "TextBlock">
                <div className="selectMonth">
                    <div className="selectDes"> Please select a month </div>
                    <div>
                        <input
                            type="month"
                            placeholder="StartDate"
                            name="startDate"
                            value={displayDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="Spending"> Total Spending : ${spending} </div>
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

