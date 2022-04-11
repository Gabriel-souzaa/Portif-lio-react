import Api from './api';

const sendEmail = {
  sendEmail: (data) => Api.post("v3/smtp/email", {
    sender: {
      name: data.name,
      email: data.email
    },
    to: [
      {
        name: "Gabriel Freitas",
        email: "gabrielfreitassouzaa@gmail.com"
      }
    ],
    htmlContent: `<!DOCTYPE html> <html> <body> <h1>Meu portifólio mensagem</h1> <p>${data.message}</p> </body> </html>`,
    subject: "Meu portifólio"
  })
}

export default sendEmail;