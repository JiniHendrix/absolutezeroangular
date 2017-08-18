module.exports = app => {
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
}