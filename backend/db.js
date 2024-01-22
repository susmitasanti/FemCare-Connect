const mongoose = require('mongoose')
// const mongoURI = "mongodb+srv://susmita:Susmita%402004@cluster0.ws45801.mongodb.net/"
const mongoURI = process.env.MONGO_URI

const connectToMongo = async()=>{
await mongoose.connect(mongoURI, await console.log("Successful Connection"));
}
module.exports=connectToMongo;