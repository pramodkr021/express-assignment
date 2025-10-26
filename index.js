const express = require("express")
const dbConnect = require("./connectDB")

const app = express()
const port = 8000

dbConnect();

app.get("/", (req, res) => {
    res.status(200).send("Welcome to TO-DO List API")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})