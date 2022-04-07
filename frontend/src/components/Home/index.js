import React from 'react';
import MyPicture from '../../assets/img/eu2.png';
import { CardMyInformation, ContentHome } from './styles';



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
          </div>
        </CardMyInformation>
      </ContentHome>
    </div>
  )
}