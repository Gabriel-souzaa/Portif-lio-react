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
              Meu nome é Gabriel Freitas, tenho 21 anos e sou apaixonado pela mundo da tecnologia. Atualmente estou fazendo faculdade de Ciência da Computação
              na UNIP e atuando como desenvolvedor fullstack freeLancer com ReactJS, React-native, nodeJs (typescript).
              <br></br><br></br>
              Desde quando iniciei na área de tecnologia,
              sabia o caminho que realmente queria seguir. Ao passar dos anos passei por várias expêriencias legais na área de desenvolvimento e um pouco de educação, como:
              partipar de projetos que davam um retorno financeiro, sem mesmo ter muito conhecimento; Ajudar a dar aula de programação para grupo de amigos; Participação de
              reunioões com clientes etc.
              <br></br>
              Depois de todas essas expêriencias que realmente consegui um emprego na área de tecnologia, no ano de 2020. Assim que realmente
              ingressei no mercado de trabalho tive em constante evolução, e com certeza muito aprendizado em cada empresa que tive o privilégio de trabalhar.
              <br></br><br></br>
              A cada dia que passa consigo aprender e evoluir ainda mais para chegar nos meus objetivos como programador, tanto nas tarefas diárias
              da empresa, quanto nos estudos que realizo todos os dias.
            </p>
          </div>
          <img src={networking} className="networking_img" width="393px" height="400px" />
        </div>
      </div>
    </div>
  )
}