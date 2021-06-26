const express = require("express")
const app = express()
const transactionsController = require("./controllers/transactionsController")
const cors = require("cors")

app.use(cors())
app.use(express.json)

app.get("/", (req,res) => {
    res.send("Welcome to my Budget App")

})

app.use("/transactions",transactionsController)
app.get("*",(req,res)=>{
    res.status("404").send("Page not found")
})
module.exports = app 