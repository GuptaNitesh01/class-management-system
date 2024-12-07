const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const statusMonitor = require('express-status-monitor')();
app.use(statusMonitor);  // .use is a middleware 


require("./router")(app);