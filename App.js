const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const ToDo = require('./models/ToDo')
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
    "mongodb://localhost:27017/shitApp",
    () => console.log("MongoDB is connected")
);

app.get('/', (req, res) => {
    ToDo.find({}).then(todos =>
    res.json(todos)
    )

})

app.post('/',
    (req, res,next) => {
        const data ={
            action: req.body.action
        }
        ToDo.create(data).then(created => {
            res.json(created)
        })
        next();
    },
    (req, res) => {
        console.log("created")
        }
)


app.listen(port ,
    () => {console.log(`Server opened at http://localhost:${port}`)
})

