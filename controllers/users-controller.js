var mongoose = require('mongoose');
require('../models/db.js');
var Users = mongoose.model('users');

var listAllUser = async (req, res) => {
    try {
        const all_authors = await Users.find();

        res.send(all_authors);

    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
}

var findGivenUser = async (req, res) => {
    let id = req.params.id;
    try {
        const given_user = await Users.findById(id);
        console.log(given_user);
        res.send(given_user);
    }catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
}

var createUser = async (req, res) => {
    console.log(req.body);
    try{
        let item = {
            username:req.body.username,
            password:req.body.password,
            dogShow: req.body.dogShow,
            dogOwner: req.body.dogOwner,
            pugOwner:req.body.pugOwner,
            workDog:req.body.workDog,
            usertype:req.body.usertype
        };
        let data = new Users(item);
        await data.save();
        console.log(data["_id"]);
        res.send(data["_id"]);
    }catch(e){
        res.status(400);
        res.send("Fail");
    }
};

var userLogin = async (req, res) =>  {
    var id = req.body.id;
    var password = req.body.password;
    const username = req.body.username;
    const usertype = req.body.usertype;
    try{
        const users = await Users.find({username:username});

        console.log(users[0].password);
        console.log(password);
        console.log(usertype);
        if (users[0].password === password){
            res.send(users);
        }
        else{
            res.send([]);
        }
    }catch(e){
        res.send([]);
    }


};

var updateUserInfo = async (req, res) => {
    var id = req.params.id;
    var newUserInfo = req.body;

    try {
        const users = await Users.findById(id);
        if (!users) {
            res.status(400);
            console.log("Author not found");
            return res.send("Author not found");
        }

        users.dogShow = newUserInfo.dogShow;
        users.dogOwner = newUserInfo.dogOwner;
        users.pugOwner = newUserInfo.pugOwner;
        users.workDog = newUserInfo.workDog
        users.username = newUserInfo.username;
        users.password = newUserInfo.password;
        users.usertype = newUserInfo.usertype

        await users.save();
        res.status(200);
        res.send('succeed');
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }
};

var deleteUser = async (req, res) => {
    let id = req.body.id;
    try{
        await Users.findByIdAndRemove(id).exec();
        res.redirect('/userpage');
        return res.send('success');
    }catch(e){
        res.status(400);
        return res.send("fail");
    }

};



module.exports.listAllUser = listAllUser;
module.exports.createUser = createUser;
module.exports.userLogin = userLogin;
module.exports.updateUserInfo = updateUserInfo;
module.exports.deleteUser = deleteUser;
module.exports.findGivenUser = findGivenUser;