 //var nano    = require('nano')('https://snow2016.cloudant.com/_all_dbs');
 //var nano = require('nano')('http://localhost:5984');
 var express = require('express')
  // , db    = require('nano')('https://snow2016.cloudant.com/student/_all_docs')
   , app     = module.exports = express()
   //, nano   = require('nano')('https://snow2016.cloudant.com/student/_all_docs')
   ;
//var Cloudant = require('cloudant');


var path=require('path');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

var routes = require("./public/mydata");
routes(app);


app.get('/search', function(req, res) {
       res.render('index', {});
       

});


app.get('/hello', function(req,res){
    res.send("hello my testing");
});
//app.listen(3333);
//console.log('server is running. check expressjs.com for more cool tricks');

app.listen(1338, function () {

  // console.log('ready on port 3333');
   console.log('server is running. check expressjs.com for more cool tricks');
});