import React from 'react'
import { Link } from 'react-scroll'
import { HearderHome, NavMenu, PictureName } from './styles'
import './styles.css'

const WIDTH = window.innerWidth;

export default function Header() {
   return (
      <HearderHome navAdjusting={WIDTH}>
         <PictureName>
            <div className="avatar">G</div>
         </PictureName>
         <NavMenu>
            <Link
               className="link"
               activeClass="active"
               to="home"
               spy={true}
               smooth={true}
               offset={-160}
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
               to="tecnologia"
               spy={true}
               smooth={true}
               offset={-125}
               duration={500}
            >
               Tecnologias
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
         </NavMenu>
      </HearderHome>
   )
}