import express from "express"

const app = express()

app.get("/health",(req,res)=>{
    res.send('Working perfectly')
})

app.listen(8000,()=>{
    console.log("Server running on port 8000");
})