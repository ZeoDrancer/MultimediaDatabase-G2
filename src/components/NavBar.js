import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar = () =>
{

  
    return (
        <Navbar bg="light" expand="lg">
          <Container fluid>
           <Navbar.Brand> <Image src="holder.js/171x180" rounded /></Navbar.Brand>
            <Navbar.Brand 
                className="me-auto my-2 my-lg-1"
                style={{ maxHeight: '100px', paddingInline: '50px', fontSize:'25px'}}
            >Multimedia Tools</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px', paddingInline: '50px', fontSize:'18px'}}
                navbarScroll
              >
                <Nav.Link href="/Home" > Home </Nav.Link>
                <Nav.Link href="/List" style={{paddingInline: '25px', fontSize:'18px'}} > List </Nav.Link>
                <NavDropdown title="Library" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/Rock">Rock</NavDropdown.Item>
                  <NavDropdown.Item href="/Rap">Rap</NavDropdown.Item>
                  <NavDropdown.Item href="/Pop">Pop</NavDropdown.Item>
                  <NavDropdown.Item href="/Merenge">Merenge</NavDropdown.Item>
                  <NavDropdown.Item href="/Salsa">Salsa</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item href="/Home">All</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Access">Access</Nav.Link>
              </Nav>
              
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  fontSize ='14px'
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" 
                style={{ fontSize:'14px'}}
                >Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    ) 
}



