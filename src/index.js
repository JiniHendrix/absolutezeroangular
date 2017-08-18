const app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "../public/home.html"
    })
    .when('/shop', {
      templateUrl: "../public/shop.html"
    })
    .when('/about', {
      templateUrl: "../public/about.html"
    })
    .when('/contact', {
      templateUrl: "../public/contact.html"
    })
    .when('/shop/neon-grizzly', {
      templateUrl: "../public/neon-grizzly.html"
    })
    .when('/shop/cold-polar', {
      templateUrl: "../public/cold-polar.html"
    })
})

app.controller('HomeController', ($scope) => {
})

app.controller('Shop', ($scope) => {

})

app.controller('About', ($scope) => {

})

app.controller('Contact', ($scope) => {

})