//server

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const port = 8000;

var mongoose = require('mongoose');
var password = encodeURIComponent('MartijnHomo69');
mongoose.connect('mongodb://Martijn:' + password + '@ds259463.mlab.com:59463/roommanager');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!");
});

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app, {});
app.listen(port, () => {
    console.log('We are live on ' + port);
});