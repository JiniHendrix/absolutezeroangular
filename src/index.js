const navController = require('./nav/navController.js');

const app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "../src/home/home.html"
    })
    .when('/about', {
      templateUrl: "../src/about/about.html"
    })
    .when('/contact', {
      templateUrl: "../src/contact/contact.html"
    })
    .when('/shop/neon-grizzly', {
      templateUrl: "../src/products/neon-grizzly.html"
    })
    .when('/shop/cold-polar', {
      templateUrl: "../src/products/cold-polar.html"
    })
})

app.controller('NavController', $scope => {
  //add on hover function for Shop that displays a drop down menu
})

app.controller('HomeController', ($scope) => {
})

app.controller('Shop', ($scope) => {

})

app.controller('About', ($scope) => {

})

app.controller('Contact', ($scope) => {

})

app.controller('ProductController', $scope => {
  //probably going to load stuff from database, but that's later later
  //probably going to make it more static than i think, because I want to match the images with the details
  $scope.neonGrizzly = {
    images: [],
    summary: '',
    details: [
      {
        header: 'hi',
        text: 'whats up dude'
      },
      {
        header: 'hi',
        text: 'whats up dude'
      },
      {
        header: 'hi',
        text: 'whats up dude'
      },
    ],
  }

  $scope.repeatMe = [
    {
        header: 'hi',
        text: 'whats up dude'
      },
      {
        header: 'hi',
        text: 'whats up dude'
      },
      {
        header: 'hi',
        text: 'whats up dude'
      },
  ]
})