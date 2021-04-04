const UserModel = require('../models/User.js');

const createUser = async (req, res) => {
     const emailExist = await UserModule.findOne({ email: req.body.email});
     if(emailExist) return res.send("Email already exist")
    const newUser = new UserModule({
        fName: req.body.firstName,
        lName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        imageUrl:req.body.imageUrl,
        phoneNumber: req.body.phoneNumber,
    });
    try {
        const saveUser = await newUser.save();
        res.send(saveUser);
    }catch(err){
        res.send(err)
    }
}


module.exports.createUser = createUser
