var nodemailer = require('nodemailer');
const readline = require('readline');
var email;

var password;

var isEmailGotten = false;

var isPasswordGotten = false;

var sendEmail;

var mailMessage;

var subject;


// readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask for email
rl.question('What is your email? ', (email) => {
  // TODO: Log the answer in a database
  isEmailGotten = true;
  // ask for password
  rl.question('What is your password? ', (password) => {
    // TODO: Log the answer in a database
    isPasswordGotten = true;
    // create transporter
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: email,
        pass: password,
      }
    });
    rl.question('What is the recipient email? ', (sendEmail) => {
      rl.question('What is the subject? ', (subject) =>{
        rl.question('What is your message? ', (mailMessage) => {
          var mailOptions = {
            from: email,
            to: sendEmail,
            subject: subject,
            text: mailMessage
          };
          if(isEmailGotten == true && isPasswordGotten == true){
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
          }
        });
      });
      
    });
  });
});