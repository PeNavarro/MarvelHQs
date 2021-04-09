import React from 'react'
import {ReactComponent as MarvelLogo} from '../images/marvel.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'


function NavbarComponent(){
    return(
        <Navbar className="navbar" variant="dark">
            <Navbar.Brand className="mx-auto" href="#home"><MarvelLogo/></Navbar.Brand>
        </Navbar>
    )
}

export default NavbarComponent