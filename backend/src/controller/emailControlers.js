const serviceEmail = require('../service/emailService');
const path = require('path');

module.exports = {
    async execute(request, response){

        const {
            email,
            name,
            messageTxt
        } = request.body

        const pathMail = path.resolve(__dirname, "..", "views", "templateEmail.hbs")

        const variables = {
            name: name,
            message: messageTxt
        }

        await serviceEmail.execute(email, "Meu portifólio",variables, pathMail);

        response.json({
            message: "E-mail enviado corretamente",
            email,
            name,
            messageTxt
        })
    }
}