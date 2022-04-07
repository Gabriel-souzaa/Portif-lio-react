import Api from './api';

const sendEmail = {
  sendEmail: (data) => Api.post("/sendEmail", data)
}

export default sendEmail;