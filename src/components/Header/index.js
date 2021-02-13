import React from 'react'

import {HearderHome} from './styles'
import './styles.css'

import MyPicture from '../../assets/img/eu2.png'

export default function Home(){
    return (
        <HearderHome>
            <img src={MyPicture} className="mypicture"/>
        </HearderHome>
    )
}