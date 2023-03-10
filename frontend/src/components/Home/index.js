import React from 'react';
import { Link } from 'react-router-dom';

import MyPicture from '../../assets/img/eu2.png';
import { CardMyInformation, ContentHome } from './styles';

import CV_PDF from '../../assets/file/CV_Gabriel.pdf';



export default function Home({ id = "home" }) {
  return (
    <div id={id}>
      <ContentHome>
        <img className="myPicture" src={MyPicture} />
        <CardMyInformation>
          <div className="aboutMe">
            <h1>
              I'M GABRIEL FREITAS
            </h1>
            <h4 className="chargeJobText">
              SOFTWARE DEVELOPER
            </h4>

            <Link className="downloadCv" to={CV_PDF} target="_blank" download>
              <h4>Baixar CV</h4>
            </Link>
          </div>
        </CardMyInformation>
      </ContentHome>
    </div>
  )
}