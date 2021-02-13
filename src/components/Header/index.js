import React from 'react'
import { Link } from 'react-router-dom'
import { HearderHome, PictureName, NavMenu } from './styles'
import './styles.css'

import MyPicture from '../../assets/img/eu2.png'

export default function Home(){
    return (
        <HearderHome>
            <PictureName>
                <img src={MyPicture} className="mypicture"/>
            </PictureName>
            <NavMenu>
                <Link to="/" >Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/technologies">Tecnologias</Link>
                <Link to="/contact">Contact</Link>
            </NavMenu>
        </HearderHome>
    )
}