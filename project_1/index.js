const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

//route
// app.get('/', function(req, res){
//     // res.send('<h1>Hello World!</h1>');
//     res.sendFile(path.join(__dirname,'public', 'index.html'));
// });

// Set static folder
app.use(express.static(path.join(__dirname,'public')));

// method to listen 
app.listen(port, () => console.log(`server is running on port ${port}`));
