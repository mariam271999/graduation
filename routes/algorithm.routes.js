const algorithmController = require("../controllers/algorithm.controller")

module.exports = (app)=>{

    app.post('/api/algorithm/:userId',
    algorithmController.getUserLevel)
    
}