import React from "react"


export function setID(ID){
        sessionStorage.setItem('buyerID', ID);
    }

export function getID() {
    return sessionStorage.getItem('buyerID');
}

export function resetID(){
    sessionStorage.removeItem('buyerID');
}

export function setUsername(username){
    sessionStorage.setItem('username', username);
}
export function setUsertype(usertype){
    localStorage.setItem('Usertype', usertype);
}

export function getUsername() {
    return sessionStorage.getItem('username');
}

export function getUsertype() {
    return localStorage.getItem('Usertype');
}

export function resetUsername(){
    sessionStorage.removeItem('username');
}

export function UserLoginState(){
    return sessionStorage.getItem('isAuthenticated');
}

export function Userlogin(){
    sessionStorage.setItem('isAuthenticated', 'true');
}

export function Userlogout(){
    sessionStorage.setItem('isAuthenticated', 'false');
}