const jobModel =require("../model/job.model")

module.exports={

    creat(req,res,next){
        const jobProps = req.body
        console.log(jobProps);
       jobModel.create(jobProps)
        res.json("success")
    },

   async all(req,res,next){
        let data =await jobModel.find({})
        res.json(data)

    },
    edit(req,res,next){
        const id = req.params.id;
        const jobProps = req.body;
    jobModel.findByIdAndUpdate({_id:id},jobProps)      
    },
    delete(req,res,next){
        const id = req.params.id;
     jobModel.findByIdAndRemove({_id:id})
    },
    findById(req,res,next){
        const jobId = req.params.id;
      job.find({_id:jobId})
    }
}