import React from 'react'

import node from '../../assets/img/icon-node.png'
import react from '../../assets/img/icon-react.png'
import css3 from '../../assets/img/icon-css3.png'
import html from '../../assets/img/icon-html.png'
import laravel from '../../assets/img/icon-laravel.png'

import './styles.css'

export default function Technologies({id = "tecnologia"}){
    return (
        <div id={id}>
            <div className="container_tec">
                <h3>Principias tecnologias</h3>

                <div className="tec_content">
                    <div className="tec_grid3">
                        <div className="info_tecs">
                            <img src={node} width="100px" height="100px"/>
                            <h4>Node js</h4>
                        </div>
                        <div className="info_tecs">
                            <img src={react} width="100px" height="100px"/>
                            <h4>React js</h4>
                        </div>
                        <div className="info_tecs">
                            <img src={react} width="100px" height="100px"/>
                            <h4>React Native</h4>
                        </div>
                    </div>
                    <div className="tec_grid3">
                        <div className="info_tecs">
                            <img src={css3} width="100px" height="100px"/>
                            <h4>Css3</h4>
                        </div>
                        <div className="info_tecs">
                            <img src={html} width="100px" height="100px"/>
                            <h4>HTML5</h4>
                        </div>
                        <div className="info_tecs">
                            <img src={laravel} width="100px" height="100px"/>
                            <h4>PHP laravel</h4>
                        </div>
                    </div>
                    <div className="tec_grid3">
                        <div className="info_tecs">
                            <img src={css3} width="100px" height="100px"/>
                            <h4>Css3</h4>
                        </div>
                        <div className="info_tecs">
                            <img src={html} width="100px" height="100px"/>
                            <h4>HTML5</h4>
                        </div>
                        <div className="info_tecs">
                            <img src={laravel} width="100px" height="100px"/>
                            <h4>PHP laravel</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}