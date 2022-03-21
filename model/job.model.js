const mongoose= require("mongoose")

const jobSchema =mongoose.Schema({

  jobName:{
        type: String,
        require:false
        
      },
    companyName:{ 
    type: String,
    required: false
     },

     spendedYears:{ 
        type: String,
        required: false
         },
    





})

const jobModel= mongoose.model('job',jobSchema)

module.exports= jobModel
