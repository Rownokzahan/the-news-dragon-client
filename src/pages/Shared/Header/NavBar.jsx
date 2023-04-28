import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs'
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }

    return (

        <Navbar collapseOnSelect expand="lg" className='mb-3'>
            <Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto d-flex align-items-center gap-3">
                        <Link to="/" className='text-decoration-none text-secondary'>Home</Link>
                        <Link to="/about" className='text-decoration-none text-secondary'>About</Link>
                        <Link to="/career" className='text-decoration-none text-secondary'>Career</Link>
                    </Nav>
                    <Nav>
                        {user ?
                            <div className='d-flex align-items-center gap-3'>
                                <Link href="/profile" className='text-decoration-none text-secondary'>
                                    <BsPersonCircle className='fs-3' />
                                </Link>
                                <Button onClick={handleLogout} className='rounded-0' variant="dark">Logout</Button>
                            </div>
                            :
                            <Link to="/user/login">
                                <Button className='rounded-0' variant="dark">Login</Button>
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar;