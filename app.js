//project is build uisng pure Node

//node modules

const http=require('http');

//file imports
const respond=require('./lib/respond.js');

//connection settings
const port=process.env.PORT || 3000;

//creating server
const server=http.createServer(respond); //respond.js file is in lib folder

//listening to server
server.listen(port, ()=>{console.log(`listening on port: ${port}`)});