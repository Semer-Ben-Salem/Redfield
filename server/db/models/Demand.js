const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const demandSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now },
    time: String,
    User: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  () => {
    console.log("inside demand model");
  }
);

const Demand = mongoose.model("Demand", demandSchema);
module.exports = Demand;
