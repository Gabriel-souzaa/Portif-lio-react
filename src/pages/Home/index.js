import React from 'react'

import { CardMyInformation, ContentHome, ButtonOnMe } from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sobre from '../Sobre'
import studentImg from '../../assets/img/image_home.png'

import './styles.css'

export default function Home(){
    return (
        <div className="container">
            <Header />
            <Footer />
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
                <img className="studentImg" src={studentImg} width="100%"/>
            </ContentHome>
        </div>
    )
}