import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { HearderHome, PictureName, NavMenu } from './styles'
import './styles.css'

import MyPicture from '../../assets/img/eu2.png'

export default function Header(){

    return (
        <HearderHome>
            <PictureName>
                <img src={MyPicture} className="mypicture"/>
                <p className="name">Gabriel Freitas</p>
            </PictureName>
            <NavMenu>
                <Link
                    className="link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-140}
                    duration={500}
                >
                    Home
                    <div className="linelink"></div>
                </Link>
                <Link
                    className="link"
                    activeClass="active"
                    to="sobre"
                    spy={true}
                    smooth={true}
                    offset={-125}
                    duration={500}
                >
                    Sobre
                    <div className="linelink"></div>
                </Link>
                <Link
                    className="link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-125}
                    duration={500}
                >
                    Contact
                    <div className="linelink"></div>
                </Link>

                <Link
                    className="link"
                >
                    Tecnologias
                    <div className="linelink"></div>
                </Link>
            </NavMenu>
        </HearderHome>
    )
}