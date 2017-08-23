module.exports = app => {
  app.controller('ContactController', ($scope, $http) => {
    //function that makes a post request using form values
    //and then clears the input fields
    //i could use this for my footer too since i dont have much to put in
    //footer could also have join mailing list and social media icons that dont work? lol
    $scope.email = e => {
      console.log(e.target.childNodes)

      const details = ['name', 'email', 'subject', 'body'];
      const parsed = {};
      details.forEach(detail => {
        parsed[detail] = e.target.getElementById(detail).value
      })

      console.log(parsed);
    }
  })
}