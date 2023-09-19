const mongoose= require('mongoose');
const { Schema } = mongoose;

const CycleSchema = new Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    },
    startDate:{
        type: String,
        required: true,
    },
    endDate:{
        type: String,
        required: true,
    },

});

module.exports=mongoose.model('cycle', CycleSchema);