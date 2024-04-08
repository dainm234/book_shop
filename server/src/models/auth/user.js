const mongoose = require("mongoose");
const useSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        minlength:10,
        maxlength:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6, 
    },
    admin:{
        type:Boolean,
        default:false,
    },
    status: {
        type: Boolean,
        default: false 
    }
},
{timestamps: true}
);
const User = mongoose.model("User",useSchema)
module.exports = User;