import React from 'react';

import { } from '@mui/icons-material';

import CardTechnologies from '../Cards/Technologies';

import node from '../../assets/img/icon-node.png';
import react from '../../assets/img/icon-react.png';
import php from '../../assets/img/icon-laravel.png';
import html from '../../assets/img/icon-html.png';
import css3 from '../../assets/img/icon-css3.png';
import aws from '../../assets/img/aws.png';

import './styles.css'

const technologies = [
  {
    name: "Node Js",
    pathImage: node
  },
  {
    name: "React Js",
    pathImage: react
  },
  {
    name: "React Native",
    pathImage: react
  },
  {
    name: "AWS",
    pathImage: aws
  },
  {
    name: "PHP (Laravel)",
    pathImage: php
  },
  {
    name: "HTML",
    pathImage: html,
  },
  {
    name: "CSS3",
    pathImage: css3
  }
];

export default function Technologies({ id = "tecnologia" }) {
  return (
    <div id={id}>
      <div className="container_tec">
        <h3>Principias tecnologias</h3>
        <div className="tec_content">
          <div className="tec_grid3">
            {technologies.map((technologies, key) => (
              <div key={key} className="info_tecs">
                <CardTechnologies title={technologies.name} image={technologies.pathImage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}