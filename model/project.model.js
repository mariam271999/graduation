const mongoose= require("mongoose")

const projectSchema =mongoose.Schema({

    projectTitle:{
        type: String,
        require:true
    },
    projectDescription:{
        type: String,
        require:true
    },
    PeriodOfProject:{
        type: String,
        require:true

    },
    userPeriodOfProject:{
        type: String,
        require:true
    },
    projectSize:{
        type: String,
        require:true
    },
    projectSkill:[{
        desc:String,
        tool:String

    }]

})

const projectModel = mongoose.model("project",projectSchema)

module.exports=projectModel