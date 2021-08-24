const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    profilePic:{
        type:String,
        default:'/images/profilePic.jpeg'
    },
});

userSchema.plugin(passportLocalMongoose);

const User=mongoose.model('User',userSchema);

module.exports=User;