import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import { CiCalendar } from "react-icons/ci";

const EditorsInsight = () => {
    const images = [img1, img2, img3, img1]
    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (                
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={images[idx]} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='text-secondary'>
                                <span className='text-secondary d-flex align-items-center gap-2 my-2'>
                                    <CiCalendar />
                                    Jan 4, 2022
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default EditorsInsight;