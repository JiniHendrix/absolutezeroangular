const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../')));

app.post('/email', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const body = req.body.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'absolutezerobags@gmail.com',
        pass: 'D1stort.'
    }
  });

  const mailOptions = {
    from: `${name}<${email}>`,
    to: 'drunk0nj1n@gmail.com',
    subject,
    text: body,
    html: '',
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.send(err);
    }
    return res.send(info);
  })
})

app.listen(port, () => {
  console.log(`Server is listening on mfing ${port}`);
});
