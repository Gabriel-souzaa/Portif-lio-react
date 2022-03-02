import React, { useState } from 'react';
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
            <h1>Contato</h1>
            <form>
               <fieldset>
                  <legend>Deixe seu comentario</legend>
                  <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Nome" />
                  <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="E-mail" />
                  <textarea onChange={(event) => setMessage(event.target.value)}></textarea>

                  <button type="submit" onClick={(event) => handleSubmit(event)}>Enviar comentário</button>
               </fieldset>
            </form>
         </div>
      </div>
   )
}