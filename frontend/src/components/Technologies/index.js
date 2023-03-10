import React from 'react';

import CardTechnologies from '../Cards/Technologies';

import node from '../../assets/img/icon-node.png';
import react from '../../assets/img/icon-react.png';
import php from '../../assets/img/icon-laravel.png';
import html from '../../assets/img/icon-html.png';
import css3 from '../../assets/img/icon-css32.png';
import aws from '../../assets/img/aws.png';
import git from '../../assets/img/icon-git.png';
import mysql from '../../assets/img/mysql.png';

import './styles.css'

const technologies = [
  {
    name: "Node Js",
    pathImage: node,
    description: [
      "* Desenvolvimento backend (NodeJS) com typescript",
      "- Gerenciamento de gateway e sockets.",
      "- Serviços para verificar determinadas tarefas nas plataformas."
    ]
  },
  {
    name: "React Js",
    pathImage: react,
    description: [
      "* Desenvolvimento frontend (React) com javascript",
      "- Sistema de nível cliente e administrativo.",
      "- Portifólio.",
    ]
  },
  {
    name: "React Native",
    pathImage: react,
    description: [
      "* Desenvolvimento mobile (React Native) com javascript;",
      "- Aplicativo mobile de rastreamento de veículos (apenas para consulta da localização);",
      "- Aplicativo para solicitações de viagens em tempo real. (Ideia parecida com a Uber/99);",
      "- Aplicativo de rede social (Projeto pessoal em desenvolvimento);"
    ]
  },
  {
    name: "AWS",
    pathImage: aws,
    description: [
      "* DevOps",
      "- EC2;",
      "- Configurações de instâncias, grupos de segurança, IP'S elásticos;",
      "- Configurações do servidor linux;",
      "- Realizando instalação de serviços para o deploy de projetos;"
    ]
  },
  {
    name: "PHP (Laravel)",
    pathImage: php,
    description: [
      "* Desenvolvimento backend (PHP Laravel);",
      "- Projeto para clínica odontologica. Cadastro/atualição/exclusão de documentos e anamneses. Geração de documento pdf;",
      "- Wordpress;"
    ]
  },
  {
    name: "HTML",
    pathImage: html,
    description: [
      "* Desenvolvimento frontend (HTML);",
    ]
  },
  {
    name: "CSS3",
    pathImage: css3,
    description: [
      "* Estilização CSS3;",
    ]
  },
  {
    name: "Git",
    pathImage: git,
    description: [
      "* Controle e vercionamento utilizando o GIT;",
      "- GitLab;",
      "- Github;",
      "- BitBucket;"
    ]
  },
  {
    name: "Database",
    pathImage: mysql,
    description: [
      "* Banco de dados relacional e não relacional",
      "- MySQL;",
      "- SQL Server;",
      "- MongoDB;",
      "- PostgreSQL;"
    ]
  }
];

export default function Technologies({ id = "tecnologia" }) {
  return (
    <div id={id}>
      <div className="container_tec">
        <h3>Principias Tecnologias (Skills)</h3>
        <div className="tec_content">
          <div className="tec_grid3">
            {technologies.map((technologies, key) => (
              <div key={key} className="info_tecs">
                <CardTechnologies title={technologies.name} image={technologies.pathImage} description={technologies.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}