module.exports = app => {
  app.controller('ContactController', ($scope, $http) => {
    //function that makes a post request using form values
    //and then clears the input fields
    //i could use this for my footer too since i dont have much to put in
    //footer could also have join mailing list and social media icons that dont work? lol
    $scope.email = () => {
      const requestBody = {};
      requestBody.name = document.getElementById('name').value;
      requestBody.email = document.getElementById('email').value;
      requestBody.subject = document.getElementById('subject').value;
      requestBody.body = document.getElementById('body').value;

      $http.post('/email', JSON.stringify(requestBody), {
        'Content-Type': 'application/json'
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }    
  })
}