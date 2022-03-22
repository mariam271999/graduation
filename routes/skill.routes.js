const skillController = require("../controllers/skill.controller")

module.exports = (app)=>{

    app.post('/api/skill',
   skillController.creat)

    app.get('/api/skill',
   skillController.all)

    app.put('/api/skill/:id',
   skillController.edit);
 
   app.delete('/api/skill/:id',
  skillController.delete);
 
   app.get('/api/skill/:id',
  skillController.findById)
    
}