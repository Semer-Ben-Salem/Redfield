const express = require("express");
const router = express.Router();
const demandController = require("../controllers/DemandController.js");

router.post("/demand", demandController.createOneDemand);
router.get("/demand", demandController.getAllDemands);

module.exports = router;
