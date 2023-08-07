'use client'

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image"

// import ButtonModalLogin from "./ModalLogin/ModalLogin";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { RxHamburgerMenu } from 'react-icons/rx';
import { FaHeadset } from 'react-icons/fa';

import './navigation.css'

export default function Navigation() {

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="container-navigation">
      <Navbar expand="xl" className="bg-body-tertiary">
        <Container fluid>
          <div className="container-nav-brand">
            <Link href="#hero-briptravel">
              <Image className="img-logo-nav" width={90} height={60} src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/73b03f18-70a5-4ee0-80bd-73b704297500/mobile" alt="Logo Briptravel" />
            </Link>
            <div className="container-nav-login">
              <Link className='btn-ventas-brip' href="tel:+541152638334" target='_blank'><FaHeadset /> Ventas </Link>
              <Navbar.Toggle className="btn-toggle-navbar" onClick={toggleMenu}>
                <RxHamburgerMenu style={{ fontSize: "24px" }} />
              </Navbar.Toggle>
            </div>
          </div>

          <Navbar.Offcanvas className="container-offcanvas" show={menuOpen}>
            <Offcanvas.Header closeButton onClick={() => setMenuOpen(false)}>
              <Link href="/#hero-briptravel">
                <Image className="img-logo-nav" width={90} height={60} src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/73b03f18-70a5-4ee0-80bd-73b704297500/mobile" alt="Logo Briptravel" />
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="nav-offcanvas flex-grow-1 nav-container" >
                <Link className="btn-navbar" href="#promociones-briptravel" onClick={() => setMenuOpen(false)}>Promociones </Link>
                <Link className="btn-navbar" href="#destinos-briptravel" onClick={() => setMenuOpen(false)}>Destinos</Link>
                <Link className="btn-navbar" href="#ayuda-briptravel" onClick={() => setMenuOpen(false)}>Ayuda</Link>
                {/* <ButtonModalLogin tittle="Iniciar sesión" /> */}
                <a className='btn-ventas-brip' href="tel:+541152638334" target='_blank'><FaHeadset style={{ fontSize: "22px" }} onClick={() => setMenuOpen(false)} /> Ventas Briptravel </a>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
