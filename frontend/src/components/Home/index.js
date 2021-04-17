import React from 'react'

import { CardMyInformation, ContentHome, ButtonOnMe } from './styles'

import studentImg from '../../assets/img/image_home.png'
import MyPicture from '../../assets/img/eu2.png'

export default function Home({id = "home"}){
    return (
        <div id={id}>
            <ContentHome>
                <CardMyInformation>
                    <img src={MyPicture}></img>
                    <div className="aboutMe">
                        <h4 className="chargeJobText">Desenvolvedor de Softwares</h4>
                        <h1>Gabriel Freitas</h1>
                    </div>
                </CardMyInformation>
                <img className="studentImg" src={studentImg} width="500px" height="500px"/>
            </ContentHome>
        </div>
    )
}