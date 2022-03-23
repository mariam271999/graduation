const userInformationController = require('../controllers/userInformation.controller')

const algorithm = require('../controllers/algorithm.controller')
module.exports=(app)=>{

app.post('/api/receiveEducation/:userId',userInformationController.receiveEducation)


app.post('/api/receiveSkill/:userId',userInformationController.receiveSkill)

app.post('/api/receiveJob/:userId',userInformationController.receiveJob)


app.post('/api/receiveProject/:userId',userInformationController. receiveProject)

app.post('/api/finish/:userId',userInformationController.receiveProject, algorithm.getUserLevel)

}


