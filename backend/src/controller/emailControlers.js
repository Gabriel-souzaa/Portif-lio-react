const serviceEmail = require('../service/emailService');
const path = require('path');
const yup = require('yup');

module.exports = {
    async execute(request, response){

        const {
            email,
            name,
            messageTxt
        } = request.body

        const schema = yup.object().shape({
            name: yup.string().required("Nome Obrigatório"),
            email: yup.string().required("E-mail Obrigatório"),
            messageTxt: yup.string().required("Mensagem de texto Obrigatório")
        })

        try {
            await schema.validate(request.body, {abortEarly: false})
        } catch (error) {
            return response.json(error.errors)      
        }

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