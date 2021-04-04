var express =require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var config = require('./Database/config.js')
var userRouter = require('./Database/routers/UserRouter.js')



var app = express();
var PORT = 3000;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',express.static((__dirname + '/../redfield/dist/redfield')));

app.use("/user",userRouter)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
