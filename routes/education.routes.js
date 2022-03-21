const educationController = require("../controllers/education.controller")

module.exports =(app)=>{
    


    app.post('/api/education',
    educationController.creat)

    app.get('/api/education',
    educationController.all)

    app.put('/api/education/:id',
    educationController.edit);
 
   app.delete('/api/education/:id',
   educationController.delete);
 
   app.get('/api/education/:id',
   educationController.findById)


    



}

