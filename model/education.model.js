const mongoose= require("mongoose")

const educationSchema =mongoose.Schema({

    educationLevel:{
        type: String,
        required: true
    },
    fieldOfStudy:{//minor
        type: String,
        required: true
        
    },
    university:{//major
        type: String,
        required: true
        
    },
    college:{
        type: String,
        required: true

    },
    grade:{
        type: String,
        required: true 
    },
    graduationYear:{
        type: Number,
        required: true
        
    }



})

const educationModel= mongoose.model('education',educationSchema)

module.exports= educationModel    

