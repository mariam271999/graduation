//sending user technical skill
//sending course id 
//total project 
//send uder id

const projectModel= require('../model/project.model')
const userModel=require('../model/user.model')
const skillModel =require('../model/skill.model')
const courseModel =require('../model/courses.model')


module.exports={

async getUserLevel(req,res,next){
    const userId =req.params.userId
     const user=await userModel.find({_id:userId})
     const courses = await courseModel.find({_id:user[0].courses})
     const skill =await skillModel.find({_id:user[0].userSkills})
     technicalSkills = skill[0].technicalSkills
     const projects =await projectModel.find({_id:user[0].userProject})



      res.json("ok")
      
      let count =0

     for (i=0; i<technicalSkills.length; i++) {
         
        for (let j = 0; j < projects.length; j++) {
          
            for (k= 0;k<projects[j].projectSkill.length; k++) {
               
              if(technicalSkills[i].tool==projects[j].projectSkill[k].tool){

                  count=count+5

              }
                
            }
            
        }

        for (let q = 0; q < courses.length; q++) {
            for (w=0;w< courses[q].targetSkills.length;w++) {
                if(technicalSkills[i].tool==courses[q].targetSkills[w].tool){
                    count=count+5
                }
         
                
            }
            
        }


        console.log(technicalSkills[i].tool+"="+count);
         
    }
  



}
}