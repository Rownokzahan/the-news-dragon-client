import React from 'react';
import { Button } from 'react-bootstrap';
import bg from '../../../assets/bg.png';
import { IoLogoGoogle } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import FindUs from './FindUs';
import QZone from './QZone';


const RightNav = () => {
    return (
        <>
            <div>
                <h4 className='fw-bolder'>Login With</h4>
                <Button className='border-2 w-100 d-flex align-items-center justify-content-center gap-2' variant="outline-primary">
                    <IoLogoGoogle />
                    Login With Google
                </Button>
                <Button className='mt-2 border-2 w-100 d-flex align-items-center justify-content-center gap-2' variant="outline-dark">
                    <AiFillGithub />
                    Login With Github
                </Button>
            </div>

            <FindUs/>
            <QZone/>

            <div className='mt-5 position-relative'>
                <img className='w-100' src={bg} alt="" />

                <div className='position-absolute text-center text-white top-0 start-0 bottom-0 end-0 d-flex flex-column justify-content-center align-items-center'>

                    <h1 className='fw-bolder'>Create An Amazing Newspaper</h1>
                    <p className='fs-5 mt-2'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='rounded-0 mt-2' size="lg" variant="danger">Learn More</Button>
                </div>
            </div>
        </>
    );
};

export default RightNav;