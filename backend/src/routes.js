const express = require('express');
const routes = express.Router();

const EmailControllers =  require('./controller/emailControlers')

routes.post('/', EmailControllers.execute);

module.exports = routes;