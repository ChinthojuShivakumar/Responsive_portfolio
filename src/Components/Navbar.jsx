import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';



function Navvbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed='top' bg='dark' style={{padding:'25px'}}>
                <Container>
                    <Navbar.Brand href="#home" style={{ fontWeight: '800px',color:'white' }}>Shivakumar's Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: 'white',border:'2px solid white' }} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href="#header" style={{ color: 'white' }}>Home</Nav.Link>
                            <Nav.Link href="#header-2" style={{ color: 'white' }}>About Me</Nav.Link>
                            <Nav.Link href="#header-3" style={{ color: 'white' }}>Skills</Nav.Link>
                            <Nav.Link href="#header-4" style={{ color: 'white' }}>Projects</Nav.Link>
                            <Nav.Link href="#footer" style={{ color: 'white' }}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navvbar