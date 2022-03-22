const userInformationController = require('../controllers/userInformation.controller')

module.exports=(app)=>{

app.post('/api/receiveEducation/:userId',userInformationController.receiveEducation)

}

app.post('/api/receiveSkill/:userId',userInformationController.receiveSkill)
