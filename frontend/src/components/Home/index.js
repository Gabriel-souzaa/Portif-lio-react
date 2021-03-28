import React from 'react'

import { CardMyInformation, ContentHome, ButtonOnMe } from './styles'

import studentImg from '../../assets/img/image_home.png'

export default function Home({id = "home"}){
    return (
        <div id={id}>
            <ContentHome>
                <CardMyInformation>
                    <div className="myinformation">
                        <h4 style={{fontSize: 20, background: "#fff", marginBottom: 10, textAlign: 'center'}}>Bem vindo ao meu Portifólio !!</h4>
                        Eu não quero que você precise de mim.<br></br>

                        Eu quero exatamente é que você nao <br></br>
                        precise nem um pouco.<br></br>

                        Mas mesmo assim escolha ficar.<br></br>
                    </div>
                    
                    <ButtonOnMe placeholder="Me conheça melhor" onClick={() => console.log("Me conheça")}>
                        Me conheça melhor
                    </ButtonOnMe>
                </CardMyInformation>
                <img className="studentImg" src={studentImg} width="500px" height="500px"/>
            </ContentHome>
        </div>
    )
}