const mongoose= require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    },
    product:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
        default:'pending'
    }

});

module.exports=mongoose.model('Cart', CartSchema);