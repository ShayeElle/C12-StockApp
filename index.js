const express = require("express"); //bringing in express
const path = require('path'); // Path returns the path
const app = express(); //bring in an instance of express
const { engine } = require('express-handlebars'); //Bringing in the engine function from handlebars

// creates a port for our server
const PORT = process.env.PORT || 7000; //When i am in development evniornemt, use the advised port otherwise if im in mym local port development use 5000


//set middleware (set up of handlebars)
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/', function (req, res){
    // res.render('home');
});


app.listen(PORT, () => console.log('listening on ' + PORT))


//set static path
app.use(express.static(path.join(__dirname, 'public')))//create route to hit the html page