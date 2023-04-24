import React from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    const [errorMessage, setErrorMessage] = useState('');

    return (
        <Container className='bg-white p-5 my-5'>
            <h3 className='text-center'>Register your account</h3>
            <hr className='my-5' />

            <p className='text-danger text-center fw-semibold'>{errorMessage}</p>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control className='bg-light border-0 py-3' type="text" name="name" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control className='bg-light border-0 py-3' type="text" name="photo_url" placeholder="Enter your photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='bg-light border-0 py-3' type="email" name="email" placeholder="Enter your email address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='bg-light border-0 py-3' type="password" name='password' placeholder="Enter your password" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Accept Term & Conditions" />
                </Form.Group>

                <Button variant="secondary w-100 rounded-0" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-5 text-center'>Already Have An Account ? <Link to={'/user/login'} className='text-decoration-none text-danger'>Login</Link></p>
        </Container>
    );
};

export default Register;