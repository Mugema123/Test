import mongoose from'mongoose';

const userSchema=mongoose.Schema({
    firstname:{
        type: String,
       
    },
    lastname:{
        type: String,
       
    },
    phone:{
        type: Number,
        
    },
    email:{
        type: String,
        
    },
    password:{
        type:String,
       
    },
    password2:{
        type:String,
        

    },
    
});

const Person = mongoose.model('User', userSchema);

export default Person;

// module.exports=mongoose.model('User',userSchema);