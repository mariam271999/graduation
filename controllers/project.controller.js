const projectModel= require('../model/project.model')

module.exports={
 async   all(req,res,next){
        const data = await projectModel.find({})
        res.json(data)
    },

    creat(req,res,next){
        const projectProps = req.body
        console.log(projectProps);
       projectModel.create(projectProps)
        res.json("success")
    },
    creatFromAraay(req,res,next){
        const projectArray = req.body
        for(i=0;i<projectArray.length;i++){
            projectModel.create(projectArray)
        }     
    },
    edit(req,res,next){
        const id = req.params.id;
        const projectProps = req.body;
        projectModel.findByIdAndUpdate({_id:id},projectProps)      
    },
    delete(req,res,next){
        const id = req.params.id;
        projectModel.findByIdAndRemove({_id:id})
    },
    findById(req,res,next){
        const id = req.params.id;
       projectModel.find({_id:id})
    }
}