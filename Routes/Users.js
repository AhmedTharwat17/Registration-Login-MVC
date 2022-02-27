const userController = require('../Controller/userControl')
const path = require('path')

module.exports = (app) => {
    //Home page
    app.get('/', (req, res)=>{
        res.sendFile(path.join(__dirname , '../views/Home.html'));
    })
    app.get('/register', (req, res)=>{
        res.sendFile(path.join(__dirname , '../views/register.html'));
    })
    //create
    app.post('/register', userController.create)

    app.get('/login', (req, res)=>{
        res.render('../views/login');
    })

    app.post('/login', userController.findUser)
    
    app.get('/user/:id', userController.detialUser)
}