const Schema = require('../Model/userSchema')
const path = require('path')

module.exports = {
    create(req, res, next){
        var users = new Schema({
            firstName:req.body.firstname,
            lastName: req.body.lastname,
            Email:req.body.gmail,
            password:req.body.password
        });
        users.save()
        .then(()=>{
            res.redirect('/login')
        }).catch(()=>{
            res.send("There is an account with this email")
        })
    },
    findUser(req, res, next){
        Schema.findOne({Email:req.body.gmail , password:req.body.password})
        .then((user) => res.redirect('/user/' + user._id))
        .catch(()=>{
            res.render('../views/login' , {
                error : "Username or Password invalid"
            });
        });
    },
    detialUser(req, res , next){
        const userId = req.params.id;
        Schema.findById({_id: userId})
        .then(user => res.render('../views/user' , {firstName : user.firstName}))
        .catch(()=>{
            res.send("Enter User")
        })
    }
}
  