import React from 'react';
import Typical from 'react-typical';
import MyPicture from '../../assets/img/eu2.png';
import { CardMyInformation, ContentHome } from './styles';



export default function Home({ id = "home" }) {
   return (
      <div id={id}>
         <ContentHome>
            <CardMyInformation>
               <div className="aboutMe">
                  <h1>
                     I'M GABRIEL FREITAS
                  </h1>
                  <h4 className="chargeJobText">
                     <Typical
                        steps={
                           [
                              "SOFTWARE DEVELOPER", 1000,
                              "FRONTEND DEVELOPER", 1000,
                              "BACKEND DEVELOPER", 1000
                           ]
                        }
                        loop={Infinity}
                     />
                  </h4>
               </div>
            </CardMyInformation>
            <img src={MyPicture} />
         </ContentHome>
      </div>
   )
}