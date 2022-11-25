var express = require('express');
var todoController = require('./controllers/todoControllers');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

const port = process.env.PORT || 5000

//middleware & static files
app.use(express.static('./public'))

//fire controllers
todoController(app)

//listen to port
app.listen(port);
console.log('You are listening to port 5000');

//STEPS
//1. Navigate to project directory in the terminal
//2. Start server typing "nodemon index.js" in terminal
//3. Open up mongodb on brower
//4. Enter http://localhost:3000/todo on the brower
