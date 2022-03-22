const educationModel = require("../model/education.model")

module.exports={

    async    creat (req,res,next){
        const educationProps = req.body
        console.log(educationProps);
     await educationModel.create(educationProps)
        res.json()   
    },

    async all(req,res,next){
        let data =await educationModel.find()
        res.json(data)

    },

   async edit(req,res,next){
        const id = req.params.id;
        const educationProps = req.body;
       await educationModel.findByIdAndUpdate({_id:id},educationProps)      
    },
   async delete(req,res,next){
        const id = req.params.id;
     await   educationModel.findByIdAndRemove({_id:id})
    },
   async findById(req,res,next){
        const id = req.params.id;
     await   educationModel.find({_id:id})
    }


}