const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const sendEmail = (from, to, subject, html) => {
  const transport = nodemailer.createTransport({
    host: process.env.HOST,
    service: process.env.SERVICE,
    port: 587,
    secure: true,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  });

  const message = {
    from: from,
    to: to,
    subject: subject,
    html: html,
  };

  transport.sendMail(message, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

const sendPartenariatEmail = (name, email, partenariat, message) => {
  const filePath = path.join(__dirname, "../views/partenariatEmail.handlebars");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const template = handlebars.compile(data);
      const html = template({
        name,
        email,
        partenariat,
        message,
      });

      sendEmail(
        email,
        process.env.MAILER_USER,
        `Demande de partenariat ${partenariat}`,
        html
      );
    }
  });
};

exports.sendPartenariatEmail = sendPartenariatEmail;
