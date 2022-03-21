const educationModel = require("../model/education.model")

module.exports={

    creat (req,res,next){
        const educationProps = req.body
        console.log(educationProps);
      educationModel.create(educationProps)
        res.json("success")
    },

    async all(req,res,next){
        let data =await educationModel.find()
        res.json(data)

    },

    edit(req,res,next){
        const id = req.params.id;
        const educationProps = req.body;
        educationModel.findByIdAndUpdate({_id:id},educationProps)      
    },
    delete(req,res,next){
        const id = req.params.id;
        educationModel.findByIdAndRemove({_id:id})
    },
    findById(req,res,next){
        const educationId = req.params.id;
        educationModel.find({_id:educationId})
    }


}