import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link className="link" to="/" >Home</Link>
                <Link className="link" to="/sobre">Sobre</Link>
                <Link className="link" to="/technologies">Tecnologias</Link>
                <Link className="link" to="/contact">Contact</Link>
            </NavMenu>
        </HearderHome>
    )
}