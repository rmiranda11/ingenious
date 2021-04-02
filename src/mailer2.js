// let express = require('express');
// var router = express.Router();
// let app = express();
// const path = require('path');
// let nodemailer = require('nodemailer');
// const cors = require('cors');
// const creds = require('./constants/config');


// // Static folder
// // app.use('./public', express.static(path.join(__dirname, 'public')));

// var transport = {
//     host: 'smtp.mail.yahoo.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: "r_miranda_11@yahoo.com",
//         pass: "vlbtegtivnpsfcsd"
//     },
//     tls: {
//         // do not fail on invalid certs
//         rejectUnauthorized: false
//     }
// }

// var transporter = nodemailer.createTransport(transport)


// // verify connection configuration
// transporter.verify(function (error, success) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Server is ready to take our messages");
//     }
// });


// router.post('/send', (req, res, next) => {
//     var name = req.body.name
//     var email = req.body.email
//     var message = req.body.message
//     var content = `name: ${name} \n email: ${email} \n message: ${message} `

//     var mail = {
//         from: name,
//         to: 'r_miranda_11@yahoo.com',  // Change to email address that you want to receive messages on
//         subject: 'New Message from Contact Form',
//         text: content
//       }

//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             res.json({
//                 status: 'fail'
//             })
//         } else {
//             res.json({
//                 status: 'success'
//             })
//         }
//     })
// })

// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use('/', router)
// const PORT = process.env.PORT || 3002
// app.listen(PORT, () => console.info(`server has started on ${PORT}`))