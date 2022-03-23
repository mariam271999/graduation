const courseController = require("../controllers/course.controller")

module.exports = (app)=>{

    app.post('/api/course',
   courseController.creat)

    app.get('/api/course',
   courseController.all)

    app.put('/api/course/:id',
   courseController.edit);
 
   app.delete('/api/course/:id',
  courseController.delete);
 
   app.get('/api/course/:id',
  courseController.findById)
    
}