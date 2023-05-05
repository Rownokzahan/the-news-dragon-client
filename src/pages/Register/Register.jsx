import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {

    useTitle("Register");
    const { register, setUserInfo } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        setErrorMessage('');

        const form = event.target;
        const name = form.name.value;
        const photo_url = form.photo_url.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(`Name: ${name}, Photo URL: ${photo}, Email: ${email}, Password: ${password}`);

        register(email, password)
            .then(result => {
                setUserInfo(name, photo_url)
                    .then(() => {
                        form.reset();
                        navigate('/user/login');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    return (
        <Container className='bg-white p-5 my-5'>
            <h3 className='text-center'>Register your account</h3>
            <hr className='my-5' />

            <p className='text-danger text-center fw-semibold'>{errorMessage}</p>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control className='bg-light border-0 py-3' type="text" name="name" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control className='bg-light border-0 py-3' type="text" name="photo_url" placeholder="Enter your photo url" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='bg-light border-0 py-3' type="email" name="email" placeholder="Enter your email address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='bg-light border-0 py-3' type="password" name='password' placeholder="Enter your password" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to={'/terms'}>Terms and Conditions</Link></>}
                        onClick={() => setAccepted(!accepted)}
                    />
                </Form.Group>

                <Button
                    variant="secondary w-100 rounded-0"
                    type="submit"
                    disabled={!accepted}
                >
                    Register
                </Button>
            </Form>
            <p className='mt-5 text-center'>Already Have An Account ? <Link to={'/user/login'} className='text-decoration-none text-danger'>Login</Link></p>
        </Container>
    );
};

export default Register;