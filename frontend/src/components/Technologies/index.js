import React from 'react'
import node from '../../assets/img/icon-node.png'
import react from '../../assets/img/icon-react.png'
import './styles.css'



export default function Technologies({ id = "tecnologia" }) {
   return (
      <div id={id}>
         <div className="container_tec">
            <h3>Principias tecnologias</h3>

            <div className="tec_content">
               <div className="tec_grid3">
                  <div className="info_tecs">
                     <img src={node} width="100px" height="100px" />
                     <h4>Node js</h4>
                  </div>
                  <div className="info_tecs">
                     <img src={react} width="100px" height="100px" />
                     <h4>React js</h4>
                  </div>
                  <div className="info_tecs">
                     <img src={react} width="100px" height="100px" />
                     <h4>React Native</h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}