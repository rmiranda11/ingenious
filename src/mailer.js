const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
// var cors = require('cors');
const cors = require("cors");
const app = express();


const corsOptions = {
  origin: 'http://www.ingeniouscarpentry.com/',
}


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


// const allowedOrigins = ['http://www.ingeniouscarpentry.com', 'http://www.fridgelyfe.com/']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions));

app.use(function(req, res, next) {
  console.log(res.header)
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'http://www.ingeniouscarpentry.com/contact');
  
  res.header('Access-Control-Allow-Origin', 'allow all');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // allow preflight
  if (req.method === 'OPTIONS') {
      res.send(200);
  } else {
      next();
  }
});

app.options('*', cors())

router.post('/send', cors(corsOptions), (req, res, next) => {
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
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//      next();
// });

// app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(8080)



//--use forever mailer.js in node to keep server running 