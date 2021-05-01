import React ,{ useState }from "react";

import { addUser } from "../api";
import Button from "../components/Button";

export default function Adduser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [usertype, setUserType] = useState("");

    function onSubmit() {
        addUser({
          username,
          password,
          firstname,
          lastname,
            usertype
        });
    }

    return (
        <div className="addAuthor">
            Add New User
            <form>
                <input
                    className="input1"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={event => {
                      setUsername(event.target.value);
                    }}
                />
                <input
                    className="input1"
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={event => {
                      setPassword(event.target.value);
                    }}
                />
                <input
                    className="input1"
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={event => {
                      setFirstName(event.target.value);
                    }}
                />
                <input
                    className="input1"
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={event => {
                      setLastName(event.target.value);
                    }}
                />


                <select className="usertype4"  onChange={event => {
                    setUserType(event.target.value);
                }}>
                <option value="" disabled selected>User Type</option>
                    <option value="Vet">Vet</option>
                    <option value="Dog Owner">Dog Owner</option>
                    <option value="Dog Breeder">Dog Breeder</option>
                </select>

                {/*
                <input
                    type="text"
                    placeholder="Vet,Dog Owner or Dog Breeder"
                    name="usertype"
                    value={usertype}
                    onChange={event => {
                        setUserType(event.target.value);
                    }}
                />
                */}
                <Button className={"btn-success"} onClick={onSubmit}>
                    Add
                </Button>
            </form>
        </div>
    );
}
