const express = require("express")
const dbConnect = require("./connectDB");
const taskRouter = require("./routes/tasks");
const cors = require("cors")
// const userRouter = require("./routes/users");

const app = express()
const port = 8000

dbConnect();

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use("/tasks", taskRouter)
// app.use("/users", userRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})