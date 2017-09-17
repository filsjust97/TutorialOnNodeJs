
/**
 * Module dependencies.
 */

var express = require('express');
var favicon = require('express-favicon');
var logger = require('express-logger');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger({path: "/path/to/logfile.txt"}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(methodOverride());
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
//app.get('/fileUploader', routes.fileUploader);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

// development only
if ('development' == process.env.NODE_ENV) {
    app.use(errorHandler());
}


var productCategoryRoute = require('./routes/productCategoryRouteConfig.js');
//var productRoute = require('./routes/productRoutConfig.js');

new productCategoryRoute(app);
//new productRoute(app);






http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});