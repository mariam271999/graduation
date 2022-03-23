const educationModel = require("../model/education.model");
const userModel = require("../model/user.model");
const skillModel = require('../model/skill.model')
const jobModel = require('../model/job.model')
const projectModel =require('../model/project.model')

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
      const skill= await skillModel.insertMany(skillProps ,async(err ,skillProps)=>{
            skillId  = skillProps[0].id
            console.log(skillId);
           await userModel.findByIdAndUpdate({_id:usrId},
                {...{"userSkills": skillId}})      
       })
       console.log(skillId);
        res.json(skill)
       
        
    },
    async receiveJob(req,res,next){
   
        const usrId = req.params.userId;
        const jobProps = req.body;
    
        var jobId 
      const job= await jobModel.insertMany(jobProps ,async(err ,jobProps)=>{
            jobId  =jobProps[0].id
            console.log(jobId);
           await userModel.findByIdAndUpdate({_id:usrId},
                {...{"userPreviousJob": jobId}})      
       })
       console.log(jobId);
        res.json(job)
    },


 async receiveProject(req,res,next){

    const userId = req.params.userId;
    const projectProps = req.body;
    let projectId
   const project= await projectModel.insertMany(projectProps,async (err,projectProps)=>{
       res.json("success")
    console.log(projectProps);

    for(i=0;i<projectProps.length;i++){
      projectId=projectProps[i].id
      console.log(projectId); 

      oldUser= await userModel.findById(userId)
       userProjects=oldUser.userProject
       userProjects.push(projectId)

       await userModel.findByIdAndUpdate({_id:userId},
        {...{"userProject":userProjects}})   
    }
  
      
      
       
      
       


   })
//    console.log(projectId);
//    res.json(project)
    


      
}


    



}

