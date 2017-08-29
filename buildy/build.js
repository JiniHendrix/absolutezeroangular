(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = app => {
  app.controller('About', ($scope) => {

  })
}
},{}],2:[function(require,module,exports){
module.exports = app => {
  app.controller('ContactController', ($scope, $http) => {
    $scope.isEmailing = false;

    $scope.email = (e) => {
      $scope.isEmailing = true;

      const requestBody = {};
      const id = e.target.id;
      requestBody.name = document.getElementById(`${id}-name`).value;
      requestBody.email = document.getElementById(`${id}-email`).value;
      requestBody.subject = document.getElementById(`${id}-subject`).value;
      requestBody.body = document.getElementById(`${id}-body`).value;

      $http.post('/email', JSON.stringify(requestBody), {
        'Content-Type': 'application/json'
      })
        .then(res => {
          console.log('Success!');
          document.getElementById(`${id}-name`).value = '';
          document.getElementById(`${id}-email`).value = '';
          document.getElementById(`${id}-subject`).value = '';
          document.getElementById(`${id}-body`).value = '';
          $scope.isEmailing = false;
        })
        .catch(err => {
          console.log('Error!');
          $scope.isEmailing = false;
        })
    }

    $scope.successOnClick = () => {
      $scope.isEmailing = true;
      console.log($scope.isEmailing)
    }
  })
}
},{}],3:[function(require,module,exports){
module.exports = app => {
  app.controller('HomeController', ($scope) => {
    
  })
}
},{}],4:[function(require,module,exports){
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
},{"./about/aboutController.js":1,"./contact/contactController.js":2,"./home/homeController.js":3,"./nav/navController.js":5,"./products/productController.js":6,"./routes/routes.js":7}],5:[function(require,module,exports){
module.exports = app => {
  app.controller('NavController', $scope => {
    //add on hover function for Shop that displays a drop down menu
    //trying to decide if i want to add elements from the function
    //or have the dropdown menu in the html itself that is regularly display: none
    //also do i want to hardcode the menu? or have angular render it?
    //if i do have angular render it, I need to attach a controller to it
    //that would have the categories, with all products of that category, as well as hrefs
    //so that it routes to the proper product page
    //and i would want it to be robust so that im not having redundant data, so that it's more maintainable
    //ideally its going to be attached to some database
    //going to have to build an object with schema like
    $scope.products = {
      "Hydration Packs": [
        {
          name: 'Neon Grizzly',
          href: '#!shop/hydration_packs/neon-grizzly'
        },
      ],
      "Cooler Bags": [
        {
          name: 'Cold Polar',
          href: '#!shop/cooler_bags/cold-polar'
        },
      ],
    }

    $scope.handleShopMouseOver = () => {
      const dropDown = document.getElementsByClassName('dropdown__wrapper')[0];
      dropDown.classList.add('add-height');
    }

    $scope.handleShopMouseLeave = () => {
      const dropDown = document.getElementsByClassName('dropdown__wrapper')[0];
      dropDown.classList.remove('add-height');
    }

    $scope.handleShopMouseClick = () => {
      const dropDown = document.getElementsByClassName('dropdown__wrapper')[0];
      dropDown.classList.toggle('add-height');
    }

    $scope.handleHamburgerClick = () => {
      const hiddenMenu = document.getElementsByClassName('small-nav')[0];
      console.log(hiddenMenu)
      hiddenMenu.classList.toggle('show-small-nav');
    }
  })
}
},{}],6:[function(require,module,exports){
module.exports = app => {
  app.controller('ProductController', $scope => {
    //probably going to load stuff from database, but that's later later
    //probably going to make it more static than i think, because I want to match the images with the details
    $scope.neonGrizzly = {
      name: 'Neon Grizzly',
      imageUrls: [
        'https://images-na.ssl-images-amazon.com/images/I/71B3WOr5nLL._SX425_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71lAj9DS5BL._SX425_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71v9sPXeXGL._SX425_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71xB7ZTJ5uL._SX425_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61iiC0t5rSL._SX425_.jpg'
      ],
      price: 18.99,
      summary: 'If you like outdoor activities and adventures, then you must always have water with you. But carrying those heavy, impractical and bulky water bottles isn’t the solution! What you need is a sturdy, leak-proof, weatherproof and waterproof hydration backpack to keep you hydrated at all times, and the Neon Grizzly is the ideal one for you! The extra-large 2L reservoir and food-grade, durable and convenient drawstring will allow you easy and hands-free access to your drink.',
      amazonUrl: 'https://www.amazon.com/dp/B071XB7ZZN',
      details: [
        {
          header: 'NOW YOU CAN STAY HYDRATED ALL THE TIME!',
          body: 'Do you like outdoor adventures but hate carrying bulky water bottles or tumblers? Now you don’t have to! The ultimate Neon Grizzly hydration backpack by Absolute Zero is here to keep you hydrated no matter where you are effortlessly!',
        },
        {
          header: 'A MUST-HAVE FOR RUNNERS, HIKERS & ALL ADVENTURERS!',
          body: 'When embarking on a new adventure into the wilderness, you should always make sure that you’re prepared. That’s why our mighty hydration bladder back bag with its huge 2L capacity is your #1 must-have accessory!',
        },
        {
          header: 'SO COMFORTABLE, YOU’LL FORGET YOU’RE WEARING IT!',
          body: 'The lightweight design and super-comfy mesh shoulder straps, will offer youthe flexibility needed to run or climb without any hassle. Plus, the breathable mesh back will prevent sweating and help you enjoy your activities frustration-free!',
        },
        {
          header: 'CAN YOU REALLY RISK DEHYDRATION?',
          body: 'The answer is simple: NO! As a result,you should always stay hydrated and make sure to replenish your bodily fluids. That’s why the Neon Grizzly robust hydration camel backpack with extra pockets is the ideal way to carry your water and snacks!',
        },
        {
          header: 'ABSOLUTE ZERO RISK!',
          body: 'When it comes to keeping you hydrated and safe, we don’t like to play around. That’s why our Neon Grizzly survival hydration backpack comes with a LIFETIME money back guarantee! If, at any time, you’re not 100% satisfied, we’ll offer you a prompt and full refund!'
        }
      ],
    }

      $scope.thumbOnClick = function(e) {
        const mainImg = document.getElementsByClassName('product__displayed-img')[0];
        mainImg.src = e.target.src;

        const hovered = document.getElementsByClassName('product__thumbs--hover')[0];
        if (hovered) hovered.classList.remove('product__thumbs--hover');

        e.target.classList.add('product__thumbs--hover');
      }
    $scope.coldPolar = {
      name: 'Cold Polar',
      imageUrls: [
        'https://images-na.ssl-images-amazon.com/images/I/A1ssKkonMOL._SX425_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/91iSMgJXFLL._SX425_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/A1YESleUHGL._SX425_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/A1H0gUdAwFL._SX466_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/91uxq0RJk7L._SX450_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/911-Hj5LG-L._SY450_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/A1dwr36-6PL._SX425_.jpg'
      ],
      price: 19.99,
      summary: 'Are you an avid lover of traveling and adventures? Or maybe a devoted fitness fan that likes to prepare their meals in order to have full control over your diet? Whichever the case, our superior quality cooling backpack is just the thing you’re looking for!',
      amazonUrl: 'https://www.amazon.com/dp/B01N9C9CKO',
      details: [
        {
          header: 'YOUR NEW FAVORITE ACCESSORY IS FINALLY HERE!',
          body: 'Plan your meals and store them, keep your lunch and dinner fresh and tasty, AND carry them wherever you want with this incredible, insulated soft cooler lunch bag that will make your life so much easier!',
        },
        {
          header: 'ENJOY YOUR MEALS FRESH LIKE YOU JUST COOKED THEM!',
          body: 'The“BearHyde”exterior made of 840D polyester makes our bag perfectly tough, tear and water resistant, and makes sure the inner liner keeps your snacks, beverages and meals yummy!',
        },
        {
          header: 'ONE BAG, NUMEROUS FEATURES!',
          body: 'Sidepockets that can hold 32 oz bottles, mesh pockets where you can store utensils and perishables, inner compartments that can perfectly fit your meal containers, and adjustable shoulder straps and carry straps that make carrying this bag a piece of cake; talk about many birds with one stone!',
        },
        {
          header: 'YOUR VERSATILE TRAVELING COMPANION!',
          body: 'Thanks to this incredible soft cooling lunch bag you can thoroughly enjoy all kinds of adventures; hiking, camping, fishing, trekking, going to the beach, or simply organizing your pool and grill party!',
        },
        {
          header: 'WE GUARANTEE YOUR SATISFACTION!',
          body: 'We want you to be happy, no matter what. That is why our products are backed by a 100% satisfaction guarantee; in the unlikely case that you don’t love your cooler bag, we will refund your money or send you a replacement!',
        }
      ],
    }
  })
}
},{}],7:[function(require,module,exports){
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
},{}]},{},[4]);
