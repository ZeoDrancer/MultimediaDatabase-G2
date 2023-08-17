import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import headerImg from '../Assets/img/icon.png'
import LogoImg from '../Assets/img/Logotype.jpg'

export const NavBar = () =>
{
    return (
        <Navbar bg="light" expand="lg">
          <Container fluid>
           <Navbar.Brand> <img class = " rounded" src={headerImg} alt="Header Img"/> </Navbar.Brand>
            <Navbar.Brand 
                className="me-auto my-2 my-lg-1"
                style={{ maxHeight: '100px', paddingLeft: '20px'}}
            ><img class = " rounded" src={LogoImg} alt="Header Img"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px', paddingInline: '25px', fontSize:'18px'}}
                navbarScroll
              >
                <Nav.Link href="/Home" > Home </Nav.Link>
                <Nav.Link href="/List" style={{paddingInline: '25px', fontSize:'18px'}} > List </Nav.Link>
                <NavDropdown title="Library" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/Musics">Musics</NavDropdown.Item>
                  <NavDropdown.Item href="/Books">Books</NavDropdown.Item>
                  <NavDropdown.Item href="/Movies">Movies</NavDropdown.Item>
                  <NavDropdown.Item href="/Series">Series</NavDropdown.Item>
                  <NavDropdown.Item href="/VideoGames">VideoGames</NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item href="/All">All</NavDropdown.Item>
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



