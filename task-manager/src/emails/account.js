const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = 'my_key';

sgMail.setApiKey(sendgridAPIKey);
sgMail.send({
  to: 'foo@foo.com',
  from: 'foo@foo.com',
  subject: 'This is my first creation!',
  text: 'I hope this one actually get to you.',
});
