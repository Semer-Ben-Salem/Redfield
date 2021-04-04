const UserModel = require('../models/User.js');
const bcrypt = require('bcrypt');
const router = require('../routers/UserRouter.js');
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

const createUser = (req, res) => {
     
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if (err) {
            return res.status(500).json({error:err});
        } else{
   
    
    const newUser = new UserModel({
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        password: hash,
        imageUrl:req.body.imageUrl,
        phoneNumber: req.body.phoneNumber,
    })

    try {
        const saveUser =newUser.save();
        res.send(saveUser)
    }catch(err){
        res.send(err)
    }
 }
})
}

const findUser = (req, res) => {
    User.find({email:req.body.email})
    .exec()
    .then(user =>{
        if (user.length < 1){
            return res.status(404).json({
                message: 'Auth failed'
            })
        }
        bcrypt.compare(req.body.password, user[0].password, (err,result)=>{
            if (err){
                return res.status(404).json({
                    message: 'Auth failed'
                })
            }
            if (result) {
               const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                },
                process.env.JWT_KEY,{
                    expiresIn: "1h"
                }, )
                return res.status(200).json({message: 'Auth successful',
                token: token
        })
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
           message: 'Auth failed'
        })
    })
}

const deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id})
    .then(result => {
        res.status(200).json({message: "User Deleted"})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
}

module.exports.createUser = createUser,
module.exports.deleteUser = deleteUser,
module.exports.findUser= findUser