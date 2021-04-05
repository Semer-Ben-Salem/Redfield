var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var config = require("./db/config.js");
var userRouter = require("./db/routers/UserRouter.js");
const demandRouter = require("./db/routers/DemandRouter.js");

var app = express();
var PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/../redfield/dist/redfield"));

app.use("/user", userRouter);
app.use("/", demandRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
