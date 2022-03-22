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
    courses:[String],

    userEducation:{
        type:String,
        ref:"educations"
    },  

    userPreviousJob:{
        type:String,
        ref:"jobs"
    },
    userProject:[{
        type:String,
        ref:"projects"

    }],
    userTechnicalSkills:
        [{type: String , 
        ref:"technicalSkills"
    }],

})

const userModel = mongoose.model("user",userSchema)

module.exports=userModel

