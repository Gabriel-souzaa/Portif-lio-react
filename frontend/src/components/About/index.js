import React from 'react'
import networking from '../../assets/img/networking.png'
import './styles.css'



export default function Sobre({ id = "sobre" }) {
  return (
    <div id={id}>
      <div className="container_about">
        <h3>Sobre mim</h3>
        <div className="aboutMe">
          <div>
            <p>
              Meu nome é Gabriel Freitas, tenho 20 anos e sou apaixonado pela programação. Atualmente estou fazendo faculdade na UNIP, atuando<br></br>
              como desenvolvedorfullstack na FlipBox e freeLancer com ReactJS, React-native, nodeJs (typescript).<br></br><br></br>
              A cada dia que passa consigo aprender e evoluir ainda mais para chegar nos meus objetivos como programador, tanto nas tarefas diárias<br></br>
              da empresa, quanto nos estudos que realizo todos os dias.<br></br>
            </p>
          </div>
          <img src={networking} className="networking_img" width="393px" height="400px" />
        </div>
      </div>
    </div>
  )
}