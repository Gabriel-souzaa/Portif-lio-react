import React from 'react'

import { CardMyInformation, ContentHome, ButtonOnMe } from './styles'

import Header from '../../components/Header'
import Home from '../../components/Home'
import About from '../../components/Sobre'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import studentImg from '../../assets/img/image_home.png'

import './styles.css'

export default function Initial(){
    return (
        <>
            <Header />
            <Home/>
            <About />
            <Contact/>
            <Footer />
        </>
    )
}