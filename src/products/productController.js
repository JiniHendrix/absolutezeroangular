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
        const mainImg = document.getElementsByClassName('product__img')[0];
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