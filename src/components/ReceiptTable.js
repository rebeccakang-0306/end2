import React from "react";
import '../styles/Users.css';
import { Table, Tr } from 'styled-table-component';
import {getSurvey} from "../api";

import {Receipt} from "../pages/Receipts";
import {User} from "../pages/Users";

export class ReceiptTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            surveys: [],
        };
    }

    // get a list of all users and set the state variable to store the user list
    async  fetchResult() {
        const data = await getSurvey();
        console.log(data)

        this.setState({ surveys: data, isLoaded: true })
    }

    componentDidMount() {
        this.fetchResult();
    }

    // render a HTML table with user information
    // <a href={value.id}>{value.id}</a> insert later
    render() {
        const { error, isLoaded, surveys } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Table className="receipt-table">
                        <thead>
                        <tr>
                            <th scope="col">UserName</th>
                            <th scope="col">UserType</th>
                            <th scope="col">Photo1</th>
                            <th scope="col">Photo2</th>
                            <th scope="col">Photo3</th>
                            <th scope="col">Photo4</th>
                            <th scope="col">Photo5</th>
                            <th scope="col">Photo6</th>
                            <th scope="col">Photo7</th>
                            <th scope="col">Photo8</th>
                            <th scope="col">Photo9</th>
                            <th scope="col">Operation</th>
                        </tr>
                        </thead>
                        <tbody>

                        {surveys.map(survey => {
                            return <Tr active key={survey._id}>
                                <td>{survey.username}</td>
                                <td>{survey.usertype}</td>
                                <td>{survey.photo1}</td>
                                <td>{survey.photo2}</td>
                                <td>{survey.photo3}</td>
                                <td>{survey.photo4}</td>
                                <td>{survey.photo5}</td>
                                <td>{survey.photo6}</td>
                                <td>{survey.photo7}</td>
                                <td>{survey.photo8}</td>
                                <td>{survey.photo9}</td>
                                <td><Receipt key={survey._id} {...survey} /> </td>
                            </Tr>
                        })}

                        </tbody>
                    </Table>
                </div>

            );
        }
    }
}