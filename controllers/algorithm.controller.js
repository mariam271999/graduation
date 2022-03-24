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

      let t =[]
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
                    if(courses[q].targetSkills[w].level=="high"){
                        count=count+5
                    }else if(courses[q].targetSkills[w].level=="medium"){
                        count=count+3
                    }else{
                        count=count+1
                    }
                    
                }
         
                
            }
            
        }
        if(count==10){
            technicalSkills[i]={
                tool:technicalSkills[i].tool,
                desc:technicalSkills[i].desc,
                level:"low"
            }
                t.push(technicalSkills[i])

            }

        

        else if(count==20){
            technicalSkills[i]={
                tool:technicalSkills[i].tool,
                desc:technicalSkills[i].desc,
                level:"medium"

            }
               t.push(technicalSkills[i])


        }
        else if(count==30){
            technicalSkills[i]={
                tool:technicalSkills[i].tool,
                desc:technicalSkills[i].desc,
                level:"high"
            }
            t.push(technicalSkills[i])
            
        }
      
        


        console.log(technicalSkills[i].tool+"="+count);
        
       count=0
      
       await skillModel.findByIdAndUpdate({_id:user[0].userSkills},{...{"technicalSkills":t}})
       
         
    }
    
  



}
}