const express = require("express");
const bodyParser = require("body-parser");
var http = require('http');

const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/sample1",(req,res)=>{
	res.send("Hello mr Shade");
});
app.listen(port);

//shade Satish code;


//create a server object:
/* http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); */