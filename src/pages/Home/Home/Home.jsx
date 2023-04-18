import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../../Shared/RightNav/RightNav';
import LeftNav from '../../Shared/LeftNav/LeftNav';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav/>
                    </Col>
                    <Col lg={6}>
                        <h4 className='fw-bolder'>Dragon News Home</h4>
                    </Col>
                    <Col lg={3}>
                        <RightNav/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;