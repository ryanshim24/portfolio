var express = require('express'),
    app = express(),
    request = require("request"),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/', function(req, res){
  res.render('index');
});


var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
