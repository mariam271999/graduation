const educationModel = require("../model/education.model");
const userModel = require("../model/user.model");
const skillModel = require('../model/skill.model')

module.exports={
receiveEducation(req,res,next){
   
    const userId = req.params.userId;
    const educationProps = req.body;
   educationModel.create(educationProps)
   let  educationId = educationProps._id
//    educationId= res.json(educationId)["_id"]  
    userModel.findByIdAndUpdate({_id:userId},
        {...{"userEducation":educationId}})      
},

receiveProject(req,res,next){

    const userId = req.params.userId;
    const projectProps = req.body;
    educationModel.create(projectProps)
    let projectId =projectProps._id
    // projectId= res.json(projectId)["_id"]  
    oldUser=userModel.findById(usrId)
    userProjects=oldUser.projects
    userProjects.push(projectId)

    userModel.findByIdAndUpdate({_id:userId},
        {...{"userProject":userProjects}})      
},
receiveSkill(req,res,next){
    const userId = req.params.userId;
    const userSkill=req.body
    skillModel.create(userSkill)
    let skillId=userSkill._id
    oldUser=userModel.findById(usrId)
    userSkill=oldUser.skill
    userSkill.push(skillId)
    
    
    userModel.findByIdAndUpdate({_id:userId},
        {...{"userSkill":userSkill}})   

    
}

    



}

