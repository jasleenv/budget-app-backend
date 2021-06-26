const express = require("express")
const transactions = express.Router()
const transactionsArray = require("../models/transactionsData")
//index gets all array of objects
transactions.get("/",(req,res)=>{
res.json(transactionsArray)
})
//create a new transaction
transactions.post("/new",(req,res)=>{
transactionsArray.push(req.body)
res.json(transactionsArray[transactionsArray.length-1])
})
//show only shows one item in index
transactions.get("/:index",(req,res)=>{
    let {index} = req.params
    if (index < transactionsArray.length){
        res.json(transactionsArray[index])
    }else{
        res.redirect("/404")
    }
})
//delete a transaction
transactions.delete("/:index",(req,res)=>{
    let {index} = req.params
    const deletedTransaction = transactionsArray.splice(index,1)
    if (index < transactionsArray.length){
        res.status(200).json(deletedTransaction)
    }else{
        res.redirect("/404")
    }
})

//put, update contents
transactions.put("/:index",(req,res)=>{
    let {index} = req.params
    transactionsArray[index]=req.body
    if (index < transactionsArray.length){
        res.status(200).json(transactionsArray[index])
    }else{
        res.redirect("/404")
    }
})


module.exports = transactions