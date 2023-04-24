import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import NavBar from '../pages/Shared/Header/NavBar';
import MaqueeContainer from '../pages/Shared/Header/MaqueeContainer';

const Main = () => {
    return (
        <>
            <Header />
            <MaqueeContainer/>
            <NavBar/>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav />
                    </Col>
                    <Col lg={6}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};

export default Main;