const mongoose =require('mongoose')



const courseSchema = mongoose.Schema({
    courseTytle:String,
    hours:Number,
    instructorName:String,
    prerequistSkills:[{ tool:String,desc:String}],
    targetSkills:[{ tool:String,desc:String ,level:String}],
    link:String
})

const courseModel = mongoose.model('course' , courseSchema)


module.exports=courseModel
