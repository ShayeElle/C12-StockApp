const express = require("express"); //bringing in express
const path = require('path'); // Path returns the path
const app = express(); //bring in an instance of express

const PORT = process.env.PORT || 7000; //When i am in development evniornemt, use the advised port otherwise if im in mym local port development use 5000

app.use(express.static(path.join(__dirname, 'public')))//create route to hit the html page
app.listen(PORT, () => console.log('listening on ' + PORT))