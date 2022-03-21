const jobController = require("../controllers/job.controller")

module.exports = (app)=>{

    app.post('/api/job',
    jobController.creat)

    app.get('/api/job',
    jobController.all)

    app.put('/api/job/:id',
    jobController.edit);
 
   app.delete('/api/job/:id',
   jobController.delete);
 
   app.get('/api/job/:id',
   jobController.findById)
    
}