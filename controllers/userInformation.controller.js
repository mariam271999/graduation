const educationModel = require("../model/education.model");
const userModel = require("../model/user.model");

module.exports={
receiveEducation(req,res,next){
   
    const usrId = req.params.userId;
    const educationProps = req.body;
   educationModel.create(educationProps)
   educationId= res.json(educationId)["_id"]  
    
   
    userModel.findByIdAndUpdate({_id:usrId},
        {...{"userEducation":educationId}})      
},

receiveProject(req,res,next){

    const userId = req.params.userId;
    const projectProps = req.body;
 educationModel.create(projectProps)
    projectId= res.json(projectId)["_id"]  
    oldUser=userModel.findById(usrId)
    userProjects=oldUser.projects
    userProjects.push(projectId)

    userModel.findByIdAndUpdate({_id:usrId},
        {...{"userProject":userProjects}})      
}
    



}

