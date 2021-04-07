const express = require("express");
const router = express.Router();
const User = require("../controllers/UserController.js");

router.post("/signup", User.createUser);
router.delete("/delete/:id", User.deleteUser);
router.post("/login", User.findUser);
router.post("/getOneUser", User.getOneUser);

module.exports = router;
