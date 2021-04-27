const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');


//465
var transport = {
    host: 'smtp.gmail.com', 
    port: 587,
    secure: false,
    auth: {
        user: process.env.REACT_APP_USER,
        pass: process.env.REACT_APP_PASS
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
  var content = `name: ${name} \n phone: ${phone} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: process.env.REACT_APP_USER, 
    subject: 'New Message from Ingenious Construction Website',
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
        from:process.env.REACT_APP_USER,
        to: email,
        subject: "Ingenious Construction <Auto reply>",
        text: `Thank you for your message. We will get in contact with you as soon as possible.\n ${name} \n${message}  \n\n Ingenious Construction `
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
// app.get('/_ah/warmup', (req, res) => {
//   // Handle your warmup logic. Initiate db connection, etc.
// });
// app.get('/', handler);

app.use(cors())

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://localhost:8080/send');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);

  // Pass to next layer of middleware
  next();
});
// app.use(cors({origin: 'http://localhost:8080/send'}));
app.use(express.json())
app.use('/', router)
app.listen(8080)

