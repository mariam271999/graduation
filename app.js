const express = require("express");

const app = express()


app.use(express.json())

app.use(require('./routes/employee.routes'))

// app.use(require("./routes/education.routes"))
const educationRoutes=require('./routes/education.routes')
const jobRoutes=require('./routes/job.routes')
const userRoutes=require('./routes/user.routes')
const projectRoutes= require('./routes/project.routes')
const skillRoutes=require('./routes/skill.routes')
const courseRoutes =require('./routes/course.routes')
const algorithmRoutes =require('./routes/algorithm.routes')


const userInformationController=require('./routes/userInformation.routes')

const mongoose= require("mongoose");


const employeeModule=require('./model/employee.model')



const educationModel=require("./model/education.model")




mongoose.connect('mongodb://localhost:27017/userCv',{useNewUrlParser: true ,useUnifiedTopology: true})

app.listen(3000,()=>{
    console.log("server running");
})

// console.log(employeeModule.findOne({technicalSkill}));

educationRoutes(app)
jobRoutes(app)
userRoutes(app)
projectRoutes(app)
skillRoutes(app)
courseRoutes(app)
algorithmRoutes(app)

userInformationController(app)