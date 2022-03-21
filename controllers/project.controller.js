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
    }
}