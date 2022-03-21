const mongoose= require("mongoose")

const userSchema= mongoose.Schema({

    fName:{
        type: String,
        require:true
    },
    lName:{
        type: String,
        require:true
    },
    phone:{
        type: Number,
        require:true
    },
    dateOfBirth:{
        type:Date,
        require:true
    },
    address:{
        type: String,
        require:true
    },
    gender:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true

    },
    password:{
        type: String,
        require:true


    },

    // confirmPassword:{
    //     type: String,
    //     require:true

    // },
    country :{
        type: String,
        require:true
    },

    photo:{
        type: String,
        require:false

    },
    userEducation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"educations"
    },  

    userJob:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"jobs"
    },
    userProject:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"projects"

    }]

})

const userModel = mongoose.model("user",userSchema)

module.exports=userModel

