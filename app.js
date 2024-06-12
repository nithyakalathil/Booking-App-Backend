const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const{bookingmodel}=require("./models/booking")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nithya:nithya913@cluster0.r7eo1il.mongodb.net/bookingDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let booking=new bookingmodel(input)
    booking.save()
    console.log(booking)
    res.json({status:"Success"})
})

app.get("/view",(req,res)=>{
    bookingmodel.find().then((data)=>{
        res.json(data)
    })
})

app.listen(8081,()=>{
    console.log("server started")
})