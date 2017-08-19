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
        href: '#!shop/neon-grizzly'
      },
    "Cooler Bags": [
      {
        name: 'Cold Polar',
        href: '#!shop/cold-polar'
      }
    ]
    ]
  }
  })
}