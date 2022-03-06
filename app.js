var express=require("express");
var cors = require('cors')
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var Product=require("./Product.model");
var port=8090;
var db='mongodb://localhost/productapp';

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));
//-----------get all products--------
app.get('/products',cors(), function(req, res) {
    console.log('getting all products');
    Product.find({})
      .exec(function(err, abc) {
        if(err) {
          res.send('error occured')
        } else {
          console.log(abc);
         res.json(abc);
        }
      });
  });
  
  app.listen(port, function() {
    console.log('app listening on port ' + port);
  });