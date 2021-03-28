const nodemailer = require('nodemailer');
const handleBars = require('handlebars');
const fs = require('fs');

require('dotenv').config();

module.exports = {

    async execute(from, subject, variables, path){
        // const accountTest = await nodemailer.createTestAccount();

        const connection = nodemailer.createTransport({
            host: process.env.HOST_SMTP,
            port: parseInt(process.env.PORT_SMTP),
            secure: false,
            auth: {
              user: process.env.EMAIL_SMTP,
              pass: process.env.PASSWORD_SMTP,
            },
        });

        const templateFileContent = fs.readFileSync(path).toString("utf8");

        const mailTemplateParse = handleBars.compile(templateFileContent);

        const html = mailTemplateParse(variables);

        const message = await connection.sendMail({
            to: process.env.EMAIL_TO,
            subject,
            html: html,
            from
        })

        console.log('Message sent: %s', message.messageId);
    }
}