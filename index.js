let cron = require("node-cron");
let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.googlemail.com",
  port: 465,
  secure: true,
  auth: {
    user: "xxxxxxxx",
    pass: "xxxxxxxx"
  }
});

let mailOptions = {
  from: '"Paul SMTP" <pheng617@gmail.com>',
  to: "pheng0617@gmail.com",
  subject: "Eat shit and code bitch",
  text: "Code Code."
};

cron.schedule("* * * * *", () => {
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
