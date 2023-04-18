import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className='mt-5'>
            <h4 className='text-secondary mb-4'>Find Us On</h4>

            <ListGroup>
                <ListGroup.Item className='text-secondary fs-5 d-flex align-items-center gap-2'>
                    <div className='text-primary bg-light px-1 rounded-circle'>
                        <FaFacebookF />
                    </div>
                    Facebook
                </ListGroup.Item>
                <ListGroup.Item className='text-secondary fs-5 d-flex align-items-center gap-2'>
                    <div className='text-primary bg-light px-1 rounded-circle'>
                        <FaTwitter />
                    </div>
                    Twitter
                </ListGroup.Item>
                <ListGroup.Item className='text-secondary fs-5 d-flex align-items-center gap-2'>
                    <div className='text-primary bg-light px-1 rounded-circle'>
                        <FaInstagram />
                    </div>
                    Instagram
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default FindUs;