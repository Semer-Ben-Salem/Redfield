const demandModel = require("../models/Demand.js");

module.exports.createOneDemand = async (req, res) => {
  console.log("start");
  const { title, body, imageUrl, time } = req.body;

  try {
    const demand = demandModel.create({
      title,
      body,
      imageUrl,
      time,
    });
    console.log("inside demand controller");
    res.send(demand);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

module.exports.getAllDemands = async (req, res) => {
  console.log("demand get");
  try {
    const demand = await demandModel.find({});
    res.send(demand);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
