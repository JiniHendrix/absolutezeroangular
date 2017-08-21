module.exports = app => {
  app.controller('ProductController', $scope => {
    //probably going to load stuff from database, but that's later later
    //probably going to make it more static than i think, because I want to match the images with the details
    $scope.neonGrizzly = {
      imageUrls: [
        'image0',
        'image1',
        'image2',
        'image3',
      ],
      price: 150,
      summary: 'HEEEEEERE I"M ALLOOOOOOWED EVERYTHING ALLLL OF THE TIIIIME',
      details: [
        'detail1',
        'detail2',
        'deatil3',
        'detail4',
      ],
    }
  })
}