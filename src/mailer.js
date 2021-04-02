var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./constants/config');
//465
var transport = {
    host: 'smtp.gmail.com', 
    port: 587,
    secure: false,
    auth: {
        user: creds.USER,
        pass: creds.PASS
  },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
    logger:true
}
var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var phone = req.body.phone
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n phone: ${phone} email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'rmiranda11@gmail.com', 
    subject: 'New Message Ingenious Construction Website',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
         status: 'success'
      })
  
      transporter.sendMail({
        from: "rmiranda1100@gmail.com",
        to: email,
        subject: "Ingenious Construction <Auto reply>",
        text: `Thank you for your message. We will get in contact with you as soon as possible. \n\n Ingenious Construction `
      }, function(error, info){
        if(error) {
          console.log(error);
        } else{
          console.log('Message sent: ' + info.response);
        }
      });
    }
  })
})


const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(8080)

