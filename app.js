const express = require('express')
var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});


const app = express()

app.use(express.static('dist'))
app.get('/',(req, res)=>{
    res.status(200).sendFile('index.html')
})

app.listen(3000,()=> {
    console.log('Votre app est dispo sur localhost:3000 ! ');
})