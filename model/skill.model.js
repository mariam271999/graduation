var mongoose=require('mongoose');
var Schema=mongoose.Schema

var SkillSchema=new Schema({
    softSkills:[String],

    technicalSkills:[{

    desc:String
    ,
    tool:String
    ,
    level:String
    
}]
})

const skillModel = mongoose.model('Skill',SkillSchema);
module.exports = skillModel;