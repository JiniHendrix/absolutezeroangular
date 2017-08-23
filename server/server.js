const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../')));

app.post('/email', (req, res) => {
  console.log(req.body);
  //user nodemailer to send email to absolutezerobags@gmail.com
})

app.listen(port, () => {
  console.log(`Server is listening on mfing ${port}`);
});
