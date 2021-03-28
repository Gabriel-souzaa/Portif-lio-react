import React, {useState} from 'react'

import './styles.css'

export default function Contact({id = "contact"}){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    async function handleSubmit(event) {
        event.preventDefault();
        
        console.log(name)
        console.log(email)
        console.log(message)
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