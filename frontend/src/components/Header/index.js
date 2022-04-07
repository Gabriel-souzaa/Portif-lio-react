import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Hamburger from 'hamburger-react'

import { HearderHome, NavMenu, PictureName } from './styles'
import './styles.css'

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <HearderHome>
      <PictureName>
        <div className="avatar">G</div>
      </PictureName>
      <NavMenu isOpen={isOpen}>
        <Link
          className="link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={!isOpen ? -160 : -100}
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
          offset={!isOpen ? -125 : -150}
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
          offset={!isOpen ? -125 : -150}
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
          offset={!isOpen ? -125 : -150}
          duration={500}
        >
          Contato
          <div className="linelink"></div>
        </Link>
      </NavMenu>
      <div className="hamburguer">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </HearderHome>
  )
}