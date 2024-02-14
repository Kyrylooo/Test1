const express = require("express")
const helmet = require("helmet")
const http = require("http")
const cors = require("cors")
const path = require("path")
const mongoose = require("mongoose")

require("dotenv").config()

const app = express()
const server = http.createServer(app)
const PORT = process.env.AIRPORT
const DBTOKEN = process.env.DBTOKEN

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get("/", (req, res, next) => {
    res.send("hello world!")
});

// mongoose.connect(DBTOKEN)
//     .then(() => {
//         server.listen(PORT)
//         console.log(`listen on port: ${PORT}`)
//     })
//     .catch((error) => {
//         console.log(error)
//     });

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })