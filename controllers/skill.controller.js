const skillModel= require('../model/skill.model')

module.exports ={

    async  all(req,res,next){
        const data = await skillModel.find({})
        res.json(data)
    },

    creat(req,res,next){
        const skillProps = req.body
        console.log(skillProps);
       skillModel.create(skillProps)
        res.json("success")
    },
    creatFromAraay(req,res,next){
        const skillArray = req.body
        for(i=0;i<projectArray.length;i++){
            skillModel.create(skillArray)
        }     
    },
    edit(req,res,next){
        const id = req.params.id;
        const skillProps = req.body;
        skillModel.findByIdAndUpdate({_id:id},skillProps)      
    },
    delete(req,res,next){
        const id = req.params.id;
        skillModel.findByIdAndRemove({_id:id})
    },
    findById(req,res,next){
        const id = req.params.id;
       skillModel.find({_id:id})
    }
}