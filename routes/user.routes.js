const userController = require('../controllers/user.controller')

const validation = require('../validator/register.validation')

module.exports= (app)=>{
//get user
app.get('./api/user',userController.all)
//add user
app.post('/api/user/register',validation,userController.creat)
//login
app.post('/api/user/login',userController.login)
//update user
app.put('/api/user/:id',
userController.edit);
//delete user
app.delete('/api/uder/:id',
userController.delete);
//find user by id
app.get('/api/user/:id',
userController.findById)
} 

