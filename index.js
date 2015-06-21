require('dotenv').load();

var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// A GET method route
app.get('/', require('./routes').index);

app.get('/test', function (req, res) {
  res.render('test')
})

// A POST method route
app.post('/', function (req, res) {
  res.send('POST index page.');
});

app.listen(process.env.SERVER_PORT);
console.log('The server is listening to ' + process.env.SERVER_PORT);
