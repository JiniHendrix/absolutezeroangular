const navController = require('./nav/navController.js');
const homeController = require('./home/homeController.js')
const aboutController = require('./about/aboutController.js');
const productsController = require('./products/productController.js')
const contactController = require('./contact/contactController.js');
const routes = require('./routes/routes.js');

const app = angular.module('App', ['ngRoute']);

routes(app);
navController(app);
homeController(app);
aboutController(app);
contactController(app);
productsController(app);