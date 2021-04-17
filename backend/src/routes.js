const express = require('express');
const routes = express.Router();

const EmailControllers =  require('./controller/emailControlers')

routes.post('/sendEmail', EmailControllers.execute);

module.exports = routes;