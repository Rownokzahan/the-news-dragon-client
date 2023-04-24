import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const MaqueeContainer = () => {
    return (
        <Container className='bg-secondary p-3 d-flex mb-3'>
            <Button className='rounded-0 fs-5' variant="danger">Latest</Button>
            <Marquee speed={100} className='bg-white pl-2'>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </Container>
    );
};

export default MaqueeContainer;