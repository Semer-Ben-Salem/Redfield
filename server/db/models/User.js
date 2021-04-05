const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  fName: String,
  lName: String,
  email: String,
  password: String,
  imageUrl: String,
  phoneNumber: Number,
  Demand: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Demand",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
