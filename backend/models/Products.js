const mongoose= require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    },
    prodName:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    image: {
        // data: Buffer,       // Store the image binary data
        // contentType: String, // Store the content type of the image (e.g., 'image/jpeg')
        type: String,
        required: true,
      },
   

});

module.exports=mongoose.model('products', ProductSchema);