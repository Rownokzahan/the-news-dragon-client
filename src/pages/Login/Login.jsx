import React from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="d-grid align-items-center mx-auto" style={{ height:'80vh' }}>
            <Container className='bg-white p-5'>
                <h3 className='text-center'>Login your account</h3>
                <hr className='my-5' />

                <p className='text-danger text-center fw-semibold'>{ errorMessage }</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='bg-light border-0 py-3' type="email" name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='bg-light border-0 py-3' type="password" name='password' placeholder="Password" />
                    </Form.Group>

                    <Button variant="secondary w-100 rounded-0" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='mt-5 text-center'>Don't Have An Account ? <Link to={'/user/register'} className='text-decoration-none text-danger'>Register</Link></p>
            </Container>
        </div>
    );
};

export default Login;