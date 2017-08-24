const nodemailer = require('nodemailer');
const validator = require('validator');

module.exports = (req, res) => {
  const name = validator.escape(req.body.name);
  const email = validator.escape(req.body.email);
  const subject = validator.escape(req.body.subject);
  const body = validator.escape(req.body.body);

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
    from: `"${name}<${email}>"`,
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
}