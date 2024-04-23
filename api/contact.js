// import sgMail from '@sendgrid/mail'

// export default async function (req, res) {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
//   const msg = {
//     to: `${process.env.SENDGRID_TO}`, //  your recipient
//     from: `${process.env.SENDGRID_FROM}`, //  your verified sender of sendgrid account
//   }

//   if (req?.body) {
//     const data = JSON.parse(req.body);
//     msg.subject = `${data.subject}`,
//     msg.html = `<h2>${data.name}</h2>
//                 <h3>${data.email}</h3>
//                 <h3>${data.phone}</h3>
//                 <p>${data.message}</p>`
//   }

//   else {
//     msg.subject = 'testing',
//     msg.html = '<h2>testing</h2>'
//   }

//   try {
//     await sgMail
//       .send(msg)
//       .then(() => {
//         console.log('Email sent')
//         res.status(200).send('success')
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   } catch (error) {
//     console.log('ERROR', error)
//     res.status(400).send('error')
//   }
// }