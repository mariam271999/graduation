const courseModel =require("../model/courses.model")

module.exports={

    creat(req,res,next){
        const courseProps = req.body
        console.log(courseProps);
       courseModel.create(courseProps)
        res.json("success")
    },

   async all(req,res,next){
        let data =await courseModel.find({})
        res.json(data)

    },
    edit(req,res,next){
        const id = req.params.id;
        const courseProps = req.body;
    courseModel.findByIdAndUpdate({_id:id},courseProps)      
    },
    delete(req,res,next){
        const id = req.params.id;
     courseModel.findByIdAndRemove({_id:id})
    },
    findById(req,res,next){
        const id = req.params.id;
      job.find({_id:id})
    }
}