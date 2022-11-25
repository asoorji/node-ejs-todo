var express = require('express');
var todoController = require('./controllers/todoControllers');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('./public'))

//fire controllers
todoController(app)

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');

//STEPS
//1. Navigate to project directory in the terminal
//2. Start server typing "nodemon app.js" in terminal
//3. Open up mongodb on brower
//4. Enter http://localhost:3000/todo on the brower
