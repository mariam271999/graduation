const projectController = require('../controllers/project.controller')

module.exports = (app)=>{

    app.get('/api/project',
   projectController.all),

    app.post('/api/project',
    projectController.creat)

    app.put('/api/project/:id',
   projectController.edit);
 
   app.delete('/api/project/:id',
  projectController.delete);
 
   app.get('/api/project/:id',
   projectController.findById)
    
}