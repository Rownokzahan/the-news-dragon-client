import React from 'react';

import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container className='mb-3'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p className='fs-5'><span className='fw-semibold'>{moment().format('dddd')},</span> <span className='text-secondary'>{moment().format("MMMM DD, YYYY")}</span></p>
            </div>
        </Container>
    );
};

export default Header;