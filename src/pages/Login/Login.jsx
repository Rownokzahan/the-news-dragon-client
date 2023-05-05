import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    useTitle("Login");
    const { login } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        setErrorMessage('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(`Email: ${email}, Password: ${password}`);

        login(email, password)
            .then(result => {
                form.reset();
                navigate(from);
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    return (
        <div className="d-grid align-items-center mx-auto" style={{ height:'80vh' }}>
            <Container className='bg-white p-5'>
                <h3 className='text-center'>Login your account</h3>
                <hr className='my-5' />

                <p className='text-danger text-center fw-semibold'>{ errorMessage }</p>
                <Form onSubmit={handleLogin}>
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