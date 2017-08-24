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