const userModel=require('../model/user.model')
const { validationResult}=require('express-validator')
const { json } = require('body-parser')

module.exports={

  async  all(req,res,next){
        let data =await userModel.find({})
        res.json(data)
    },


  async  creat(req,res,next){

        const err= validationResult(req)
         if(err.isEmpty()){
            const userProps =req.body
            console.log(userProps);

            const userEmail =await userModel.findOne({email:userProps.email})

            if(userEmail){
                res.json("email is exist")
            }else{
               await userModel.create(userProps)
                res.json("success")

            }

         }else{
             res.send(err.array())

         }


        

    },

   async login (req,res,next){
        const loginProps =req.body
        const user =await userModel.findOne({email:loginProps.email})

        if(user){
            if(user.password==loginProps.password){
                res.json(user)
            }else{
                res.json({message:"incorrect password"})
            }
        }else{
            res.json({massege:"email not exist"})
        }
    }
}