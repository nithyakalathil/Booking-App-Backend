const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "firstname":String,
        "lastname":String,
        "email":String,
        "mobile":String,
        "price":String
    }
)

let bookingmodel=mongoose.model("booking",schema)

module.exports={bookingmodel}