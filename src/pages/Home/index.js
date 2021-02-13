import React from 'react'

import { CardMyInformation, ContentHome, ButtonOnMe } from './styles'

import Header from '../../components/Header'
import studentImg from '../../assets/img/image_home.png'

import './styles.css'

export default function Home(){
    return (
        <div>
            <Header />
            <ContentHome>
                <CardMyInformation>
                    <>
                        Minhas informações
                    </>
                    
                    <>
                        <ButtonOnMe placeholder="Me conheça melhor">Me conheça melhor</ButtonOnMe>
                    </>
                </CardMyInformation>
                <img src={studentImg} />
            </ContentHome>
        </div>
    )
}