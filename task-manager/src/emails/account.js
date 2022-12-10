const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = 'my_key';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'foo@foo.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app ${name}, Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, user) => {
  sgMail.send({
    to: email,
    from: 'foo@foo.com',
    subject: 'Sorry to see you go',
    text: `GoodBye, ${user}. I hope yo see you back sometime soon.`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
