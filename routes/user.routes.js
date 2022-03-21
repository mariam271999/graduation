const userController = require('../controllers/user.controller')

const validation = require('../validator/register.validation')

module.exports= (app)=>{

    app.get('./api/user',
    userController.all)

    app.post('/api/user/register',validation
    ,userController.creat)

    app.post('/api/user/login',userController.login)

} 

