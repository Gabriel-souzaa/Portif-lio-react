import React, { useState } from 'react';

import { Button, TextField } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { SendOutlined } from '@mui/icons-material';

import SendEmail from '../../services/sendMail';

import './styles.css';


export default function Contact({ id = "contact" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await SendEmail.sendEmail({
        name,
        email,
        messageTxt: message
      });
      if (response) {
        alert("E-mail enviado com sucesso");
        console.log("Sucesso padrin");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id={id}>
      <div className="container_contact">
        <h3>Contato</h3>
        <form>
          <fieldset>
            <TextField id="outlined-basic" label="Name" variant="standard" onChange={(event) => setName(event.target.value)} />
            <TextField id="outlined-basic" label="E-mail" variant="standard" onChange={(event) => setEmail(event.target.value)} />
            <TextareaAutosize
              onChange={(event) => setMessage(event.target.value)}
              aria-label="empty textarea"
              placeholder="Deixe sua mensagem"
              style={{ width: 200, height: 100 }}
            />
            <Button
              variant="contained"
              onClick={(event) => handleSubmit(event)}
              endIcon={<SendOutlined />}
            >
              Send
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}