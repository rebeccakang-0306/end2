import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import {setUsername, setID, getID, Userlogin,setUsertype} from "./components/CurrentUser"



// TODO - update this to be your url
//const BASE_URL = "https://digiceipttest.herokuapp.com";
 const BASE_URL = "http://localhost:8000";
const Font_URL = "http://localhost:3000";


export function getUsers() {
    const endpoint = BASE_URL + '/get-user';
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });
}

export function getCertainUser(id) {
    const endpoint = BASE_URL + '/find-given-user/' + id;
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });

}



export function addUser(user) {
    const { username, password, firstname, lastname, usertype } = user;
    if (!username || !password || !firstname || !lastname || !usertype) {
        alert("must include all fields");
        return;
    }

    const endpoint = BASE_URL + `/insert-user/`;

    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({
            username,
            password,
            firstname,
            lastname,
            usertype})
    })
        .then(res => {
            if(res.status === 400){
                alert("Username exists!");
            }
            else{
                  window.location.reload(true)
            }
        });
}

export function register(e, lg) {
    e.preventDefault();
    const username = document.getElementById('Username').value;
    const password = document.getElementById('password').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const usertype = document.getElementById('usertype').value;




    let request = {
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        /* 1 */
        usertype: usertype
    };

    const endpoint = BASE_URL + `/insert-user/`;

    axios.post(endpoint, request)
        .then(resp => {
            console.log(resp)
            if(resp.status === 400) {
                alert("Username exists!");
                let path = "/register";
                lg.setState({redirectState: true, path:path})
            }else{
                setID(resp.data);
                setUsername(username);
                setUsertype(usertype);
                Userlogin();
                let path = '/personalpage/' + resp.data;
                lg.setState({redirectState: true, path:path})
            }
        }).catch(err => {
        alert("Username exists! Please change username.");
        console.log(err);
        })
}

export function login(e, lg) {
    const endpoint = BASE_URL + '/user-login';
    e.preventDefault();
    let request = {
        username: document.getElementById('Username').value,
        password: document.getElementById('password').value,

    };
 //   alert(request.username + request.password);
    axios.post(endpoint, request)
        .then(resp => {
            if(resp.data.length > 0) {
                let userID = resp.data[0]['_id'];
                let username = resp.data[0]['username'];
                let usertype = resp.data[0]['usertype'];
                setID(userID);
                setUsername(username);
                setUsertype(usertype)
                Userlogin();
                console.log(getID())
                if(username === 'admin'){
                    let path = '/users'
                    lg.setState({redirectState: true, path: path});
                }else{
                    let path = '/personalpage/' + userID;
                    lg.setState({redirectState: true, path: path});
                }
            }
            else {
                setID("");
                alert("Username or password is incorrect.")
            }
            //Login.setPath(path);
        })
        .catch(err => {
            alert("Error.");
            console.log(err);
        })
}

export function updateUser(user) {
    const { _id, firstname, lastname, username, password, usertype } = user;
    if (!_id) {
        alert("must include an id");
        return;
    }
    if (!firstname || !lastname) {
        alert("must include a first name or last name to update");
        return;
    }
    if (!username || !password) {
        alert("Invalid username or password submitted");
        return;
    }

    const endpoint = BASE_URL + `/update-user-info/${_id}`;

    // return fetch query to update an author
    return fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ _id,
            firstname,
            lastname,
            username,
            password,
        usertype})
    })
        .then(res => window.location.reload(true));

}

export function deleteUser(id) {
    const endpoint = BASE_URL + '/delete-user';

    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    })
        .then(res => window.location.reload(true));
}

export function useUsers() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsers()
            .then(users => {
                setUsers(users);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        users,
        error
    };
}

export function getUserReceipt(id) {

    const endpoint = BASE_URL +'/userpage/list-user-receipt/' + id;

    return fetch(endpoint).then(res => {
        return res.json();
    });
}

export function UserReceipt(id) {
    const [loading, setLoading] = useState(true);
    const [receipts, setReceipts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUserReceipt(id)
            .then(receipts => {
                setReceipts(receipts['receipts']);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        receipts,
        error
    };
}

// Receipt api
export function getReceipt() {
    const endpoint = BASE_URL + '/get-receipt';
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });
}

export function useReceipt() {
    const [loading, setLoading] = useState(true);
    const [receipts, setReceipts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getReceipt()
            .then(receipts => {
                setReceipts(receipts);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        receipts,
        error
    };
}

export function updateReceipt(receipt) {
    const { _id, category } = receipt;
    if (!_id) {
        alert("must include an id");
        return;
    }
    if (!category) {
        alert("must include a category to update");
        return;
    }

    const endpoint = BASE_URL + `/update-receipt`;

    // return fetch query to update an author
    return fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ _id,
            category })
    })
        .then(res => {
            if(res.status === 400){
                alert("Update failed.")
            }else{
                window.location.reload(true);
            }
        });
}

export function deleteReceipt(id) {
    const endpoint = BASE_URL + '/delete-receipt';

    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    })
        .then(res => window.location.reload(true));
}

export function deleteSurvey(id) {
    const endpoint = BASE_URL + '/delete-survey';

    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ id })
    })
        .then(res => {if(res.status === 400){
        alert("Cannot ");
    }
    else{
        window.location.reload(true)
    }
})
}


export function addReceipt(receipt) {
    const { buyerID, shop, description, price, category, date } = receipt;
    if (!buyerID || !shop || !description || !price || !category|| !date) {
        alert("must include all fields");
        return;
    }

    const endpoint = BASE_URL + `/create-receipt`;

    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({
            buyerID,
            shop,
            description,
            price,
            category,
            date
        })
    })
        .then(res => {
            if(res.status === 400){
                alert("Cannot create this receipt.");
            }
            else{
                window.location.reload(true)
            }
        });
}

export function budget(query){
    const { buyerID, startDate, endDate } = query;
    console.log(query);
    if (!buyerID||!startDate || !endDate) {
        alert("Please login from main page");
        return;
    }

    const endpoint = BASE_URL + '/userpage/list-user-receipt-bydate/' + buyerID + '/' + startDate + '/' + endDate;

    return fetch(endpoint)
        .then(res => {
            console.log(res);
            return res.json()});
}



export function createSurvey(state) {
    const { username,usertype,photo1f,photo1s,photo2f,photo2s,photo3f,photo3s,photo4f,photo4s,photo5f,photo5s,photo6f,
        photo6s,photo7f,photo7s,photo8f,photo8s,photo9f,photo9s } = state;
    const endpoint = BASE_URL + '/submit-survey';
    console.log(endpoint)
    fetch(endpoint, { method: "POST", headers: {
            "Content-Type": "application/json" },
        body: JSON.stringify({ username,usertype,photo1f,photo1s,photo2f,photo2s,photo3f,photo3s,photo4f,photo4s,photo5f,photo5s,photo6f,
            photo6s,photo7f,photo7s,photo8f,photo8s,photo9f,photo9s })
    })
        .then(res => {
            if(res.status === 400){
                alert("Cannot create this result.");
            }
            else{

                window.location=Font_URL+'/finish';
            }
        });
}

export function getSurvey() {
    const endpoint = BASE_URL + '/get-Survey';
    return fetch(endpoint).then(res => {
        console.log(res);
        return res.json();
    });
}

export function useSurvey() {
    const [loading, setLoading] = useState(true);
    const [surveys, setSurveys] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSurvey()
            .then(surveys => {
                setSurveys(surveys);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        surveys,
        error
    };
}
