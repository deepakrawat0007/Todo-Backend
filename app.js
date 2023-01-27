const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser')
const app = express();
const routes = require("./routes/routes")

app.use(cors())
app.use(express.json())
app.use(bodyparser.json())

app.get("/" , (req,res)=>{
    res.status(200).json({
        "Message":"Hello World"
    })
})
app.use("/" , routes)

module.exports = app