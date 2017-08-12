const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT;

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/angular', (req, res) => {
  fs.readFile(path.resolve(__dirname, '../node_modules/angular/angular.js'), 'utf8', (err, angular) => {
    res.set('Content-Type', 'application/javascript').send(angular);
  });
});



app.listen(port, () => {
  console.log(`Server is listening on mfing ${port}`);
});
