const UserModel = require('../models/User.js');
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
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
 

module.exports.createUser = createUser
