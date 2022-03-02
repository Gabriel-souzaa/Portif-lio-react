import React from 'react'
import networking from '../../assets/img/networking.png'
import Technologies from '../Technologies'
import './styles.css'



export default function Sobre({ id = "sobre" }) {
   return (
      <div id={id}>
         <div className="container_about">
            <div className="aboutMe">
               <img src={networking} className="networking_img" width="393px" height="400px" />
               <div>
                  <h1>Sobre mim</h1>
                  <p>
                     Meu nome é Gabriel Freitas, tenho 20 anos e sou apaixonado pela programação. Atualmente estou<br></br>
                     fazendo faculdade na UNIP, atuando como desenvolvedor NODEJS na Business Integrator e freeLancer com<br></br>
                     NODEJS (aplicação de gateway buscando informações de um rastreador). A cada dia que passa consigo <br></br>
                     aprender e evoluir ainda mais para chegar nos meus objetivos como programador, tanto nas tarefas diárias<br></br>
                     da empresa como programador, tanto nas tarefas diárias da empresa, quanto nos cursos realizo todos os dias.<br></br>
                  </p>
               </div>
            </div>
            <div className="technologies">
               <Technologies />
            </div>
         </div>
      </div>
   )
}