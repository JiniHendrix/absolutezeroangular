const app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider) {console.log('HELLO')
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
})

app.controller('HomeController', ($scope) => {
console.log('HELLO')
})

app.controller('Shop', ($scope) => {

})

app.controller('About', ($scope) => {

})

app.controller('Contact', ($scope) => {

})