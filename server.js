var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose'),
  multer = require('multer'),
  bodyParser = require('body-parser');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
mongoose.connect(process.env.DB_URI, {useFindAndModify: false, useNewUrlParser: true});

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse')



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
