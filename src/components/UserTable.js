import React from "react";

import { Table, Tr } from 'styled-table-component';
import {getUsers} from "../api";
import {User} from "../pages/Users";
import '../styles/Users.css';

export class UserTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: [],        // list of users
        };
    }

    // get a list of all users and set the state variable to store the user list
    async  fetchUsers() {
        const data = await getUsers();

        this.setState({ users: data, isLoaded: true })
    }

    componentDidMount(){
        this.fetchUsers();
    }

    // render a HTML table with user information
    // <a href={value.id}>{value.id}</a> insert later
    render() {
        const { error, isLoaded, users } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Table className={"user-table"}>
                        <thead>
                        <tr>
                            <th scope="col">User First Name</th>
                            <th scope="col">User Last Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">User Type</th>
                            <th scope='col'>Update</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => {
                            return <Tr active key={user._id}>
                                <td className={"userData"}>{user.firstname}</td>
                                <td className={"userData"}>{user.lastname}</td>
                                <td className={"userData"}>{user.username}</td>
                                <td className={"userData"}>{user.usertype}</td>
                                <td className={"userData"}><User key={user._id} {...user} /> </td>
                            </Tr>
                        })}
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}