var express = require("express");
var app = express();

app.use('/src', express.static(__dirname +'/src'));
app.use('/node_modules', express.static(__dirname +'/node_modules'));


app.listen('4000',function(){
	console.log("Server running at the port 4000")
})

app.get('/',function(requset,response){
	response.sendFile('index.html',{'root':__dirname +'/src'})
})