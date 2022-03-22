const educationModel = require("../model/education.model");
const userModel = require("../model/user.model");
const skillModel = require('../model/skill.model')

module.exports={
    async receiveEducation(req,res,next){
   
        const usrId = req.params.userId;
        const educationProps = req.body;
    
        var educationId ='e'
       const education =await educationModel.insertMany(educationProps ,async(err ,educationProps)=>{
            educationId  = educationProps[0].id
            console.log(educationId);
           await userModel.findByIdAndUpdate({_id:usrId},
                {...{"userEducation":educationId}})      
       })
       console.log(educationId);
        res.json(education)
       
        
    },

    async receiveSkill(req,res,next){
   
        const usrId = req.params.userId;
        const skillProps = req.body;
    
        var skillId 
       const skill =await skillModel.insertMany(skillProps ,async(err ,skillProps)=>{
            skillId  = skillProps[0].id
            console.log(skillId);
           await userModel.findByIdAndUpdate({_id:usrId},
                {...{"userSkills": skillId}})      
       })
       console.log(skillId);
        res.json(skill)
       
        
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
}


    



}

