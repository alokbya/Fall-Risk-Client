import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../context/global/userState';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { globalUser, logoutUser } = useContext(UserContext);

  const [ sessionCookie, removeCookie ] = useCookies(['session']);
  const navigate = useNavigate();
  const signOut = async () => {
    const response = await fetch('http://localhost:3001/auth/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      logoutUser();
      navigate('/auth');
      removeCookie('session');
    }
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Don't Fall on Me</Navbar.Brand>
            {Object.keys(globalUser).length > 0 && globalUser.loggedIn ? 
              <> 
              <Nav.Item><span>Welcome, {globalUser.user.first_name}</span></Nav.Item>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Data</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider /> 
                <NavDropdown.Item href="#action/3.1"><a className='logout' onClick={signOut}>Logout</a></NavDropdown.Item>
              </NavDropdown>
              </Nav>
          </Navbar.Collapse>
              </> : '' }
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;