import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'

import { Outlet, Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Blog } from './WebPages';


function DefaultLayout(){

    return <>
        <header>
            <NavigationBar />
        </header>
        <main>
        <Container fluid>
            <Row className="vh-100">
            <Col style={{marginTop: '5rem'}} >
                <Outlet />
            </Col>
            </Row>
        </Container>
        </main>
    </>
    ;
}

function MainLayout(){
    
    // main layout will always display frontOffice view 
    // inside front office if the user is logged there is the possiblity to switch to backOffice view with a button
    // inside backOffice view there is the possibility to switch back to frontOffice view with a button

    return <>
        <FrontOffice />
    </>
    ;
}

function FrontOffice(){
    
    // frontOffice view is the default view for loggedUser and not loggedUser
    // frontOffice view will only dispaly elements of the blog with a 'valid' pubblication date
    // draft pages and future scheduled pages will not be displayed

    return <>
        <Blog />
    </>
    ;
}

function BackOffice(){
    
    // inside backOffice view the possibility to edit the blog elements differs
    // from user who are logged as admin and user who are logged as normal user
    // the admin can edit all the elements of the blog
    // the normal user can edit only the elements he created
    
    return
    ;
}

function NavigationBar(){
    return <>
        <Navbar bg="light" fixed="top" className='personalizedNavbar'>
            <Container fluid>
            <Navbar.Brand>
                <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
                    BlogName {/* sara un valore dinamico modificabile */}
                </Link>
            </Navbar.Brand>  
                <Link to='/login' className='d-flex align-items-center text-decoration-none'>
                    <span style={{ color: 'black', marginRight: '1rem' }}>Testo</span>                    
                    <i className="bi bi-person-circle icon-size"/>
                </Link>
            </Container>
        </Navbar>
    </>
    ;
}

export { DefaultLayout, MainLayout};