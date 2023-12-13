const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   secure: true,
   auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
   },
});


// async..await is not allowed in global scope, must use a wrapper
async function emailHandler(title, description, recipient) {
    const messageHTML = `<div>
<div
   class="heading"
   style="background-color: #3182ce; padding: 20px; color: #fff"
>
   <h1>Harmony Success Announcement</h1>
</div>
<div style="margin: auto; padding: 20px" class="">
   <div
      style="
         padding: 1rem;
         border-radius: 0.375rem;
         background-color: #fff;
         margin-top: 1.25rem;
      "
      class="wrap"
   >
      <div style="margin-bottom: 0.75rem" class="heading">
         <span
            style="
               font-size: 1.25rem;
               font-weight: bold;
               display: inline-block;
            "
            >${title}</span
         >
         <br />
         <span style="font-size: 0.875rem; color: #a0aec0"
            >2023-12-13</span
         >
      </div>
      <div style="line-height: 1.5" class="message">
         <span>${description}.</span
         >
      </div>
      <div
         style="
            margin-top: 0.375rem;
            background-color: #edf2f7;
            padding: 0.75rem;
         "
         class="text-wrap"
      >
         Sent by Admin:
         <span
            style="
               color: #3182ce;
               font-size: 0.875rem;
               font-weight: bold;
            "
            >Mr Kolawoye Adams</span
         >
      </div>
   </div>
</div>
</div>
`;

   // send mail with defined transport object
   const info = await transporter.sendMail({
      from: process.env.GMAIL_USER, // sender address
      to: recipient, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: messageHTML, // html body
   });

   console.log("Message sent: %s", info.messageId);
}

// emailHandler("This is a title i'm testing oooo", "We are all trtiy  to see the way the thing go turn out ").catch(console.error);

module.exports = emailHandler