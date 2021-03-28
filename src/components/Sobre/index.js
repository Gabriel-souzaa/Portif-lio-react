import React from 'react'

import Technologies from '../Technologies'

import networking from '../../assets/img/networking.png'
import './styles.css'

export default function Sobre({id = "sobre"}){
    return (
        <div id={id}>
            <div className="container_about">
                <div className="aboutMe">
                    <h1>Sobre mim</h1>
                    <p>
                        Meu nome é Gabriel Freitas, tenho 18 anos e sou apaixonado pela computação/programação. Atualmente estou<br></br>
                        fazendo faculdade na UNIP, atuando como desenvolvedor PHP/JS (estagiário) na Business Integrator e freeLancer com<br></br>
                        ReactJS/React-native. A cada dia que passa consigo aprender e evoluir ainda mais para chegar nos meus objetivos<br></br>
                        como programador, tanto nas tarefas diárias da empresa, quanto nos cursos realizo todos os dias.<br></br>
                    </p>
                    <img src={networking} className="networking_img" width="393px" height="400px" />
                </div>
                <div className="technologies">
                    <Technologies />
                </div>
            </div>
        </div>
    )
}