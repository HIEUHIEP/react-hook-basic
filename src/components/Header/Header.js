import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const handleRegister = () => {
        navigate('/register');
    }

    const isAuthenticated = useSelector(state => state?.user?.isAuthenticated)
    const account = useSelector(state => state?.user?.account)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="/">HiepLH1</Navbar.Brand> */}
                {/* NavLink: high light link */}
                <NavLink to='/' className='navbar-brand'>HiepLH1</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/users' className='nav-link'>Users</NavLink>
                        <NavLink to='/admins' className='nav-link'>Admins</NavLink>
                    </Nav>
                    <Nav>
                        {!isAuthenticated ?
                            <>
                                <button className="btn-login" onClick={() => handleLogin()}>Login</button>
                                <button className="btn-signup" onClick={() => handleRegister()}>Sign up</button>
                            </>
                            :
                            <NavDropdown title="Settings" id="basic-nav-dropdown">
                                <NavDropdown.Item >Logout</NavDropdown.Item>
                                <NavDropdown.Item >Profile</NavDropdown.Item>

                            </NavDropdown>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;