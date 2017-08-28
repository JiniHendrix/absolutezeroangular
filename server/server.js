const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const emailController = require('./controllers/emailController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../')));

app.post('/email', emailController);

app.listen(port, () => {
  console.log(`Server is listening on mfing ${port}`);
});
