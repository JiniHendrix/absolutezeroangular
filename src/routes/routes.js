module.exports = app => {
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
    .when('/shop/hydration_packs/neon-grizzly', {
      templateUrl: "../src/products/neon-grizzly.html"
    })
    .when('/shop/cooler_bags/cold-polar', {
      templateUrl: "../src/products/cold-polar.html"
    })
})
}