const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendMail = asyncHandler(async ({ email, html , subject}) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, //true for port 465, false for other ports
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"E-Commerce" <no-reply@hpecommerce.com>', // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    html: html, // html body
  });
  return info;
});

module.exports = sendMail;
