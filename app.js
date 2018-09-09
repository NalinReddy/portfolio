var express = require('express');
var path = require('path');





var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var publicPath = path.join(__dirname, '/views/public');
app.use(express.static(publicPath));

app.get("/", function(req, res){
	res.render("index");
})

app.listen(process.env.PORT || 3000,function(err){
    if(err){
    	console.log(err);
    }else{
    	console.log("connection to server is successfull");
    }
});