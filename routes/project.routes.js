const projectController = require('../controllers/project.controller')

module.exports = (app)=>{

    app.get('/api/job',
   projectController.all),

    app.post('/api/job',
    projectController.creat)

    
    
}