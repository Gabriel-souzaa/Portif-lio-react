import React from 'react'

import { CardMyInformation, ContentHome, ButtonOnMe } from './styles'

import Header from '../../components/Header'
import studentImg from '../../assets/img/image_home.png'

import './styles.css'

export default function Home(){
    return (
        <div className="container">
            <Header />
            <ContentHome>
                <CardMyInformation>
                    <>
                        Meu nome é Gabriel Freitas, tenho 18 anos e sou apaixonado pelo mundo computação/programação. 

                        Atualmente estou fazendo faculdade na UNIP, atuando como desenvolvedor PHP/JS (Trainee)
                        na Business Integrator e freeLancer com ReactJS/React-native.

                        A cada dia que passa consigo aprender e evoluir ainda mais para chegar nos meus objetivos como
                        programador, tanto nas tarefa diárias da empresa, quanto nos cursos e treinamentos que realizo
                        todos os dias.
                    </>
                    
                    <>
                        <ButtonOnMe placeholder="Me conheça melhor">
                            Me conheça melhor
                        </ButtonOnMe>
                    </>
                </CardMyInformation>
                <img className="studentImg" src={studentImg} />
            </ContentHome>
        </div>
    )
}