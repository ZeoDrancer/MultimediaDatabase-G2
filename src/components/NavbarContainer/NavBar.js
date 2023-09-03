import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import headerImg from '../../Assets/img/icon.png'
import LogoImg from '../../Assets/img/Logotype.jpg'
import { useState,useEffect } from 'react';
import { supabase } from '../supabase/supabase';
import { Row } from 'react-bootstrap';
import { NavBarComplementCard } from './NavBarComplementCard';
import { Link } from 'react-router-dom';


export const NavBar = ({setResuls}) =>{

    const [data, setData] = useState([]);
    const [searchValue,setSearchValue] = useState ('')
   

    async function fetchData() {
        
      let { data: MultimediaBase, error } = await supabase
      .from('MultimediaBase')
      .select()

      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        console.log(MultimediaBase)
        setData(MultimediaBase);
      }
    }

   const handleChange = (event) =>{
      setSearchValue(event.target.value);
   }

   let resultado = [];

   if (!searchValue)
   {
      resultado = [];
   }
   else 
   {
      resultado = data.filter ((datoSend) => 
        datoSend.Artist_Name.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )

   }

   useEffect(() => {
    fetchData();
    }, [])

    return (
      <>
        <Navbar bg="light" expand="lg" style={{marginBottom: '1rem'}}>
          <Container fluid>
          <Navbar.Brand> <img class = " rounded" src={headerImg} alt="Header Img"/> </Navbar.Brand>
            <Navbar.Brand 
                className="me-auto my-2 my-lg-1"
                style={{ maxHeight: '100px', paddingLeft: '20px'}}
            ><img class = " rounded" src={LogoImg} alt="Header Img"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className=" Text_decoration me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px', paddingInline: '25px', fontSize:'18px'}}
                navbarScroll>

                <Nav.Link ><Link className='Text_decoration' to='/Home'> Home </Link></Nav.Link>
                <Nav.Link  style={{paddingInline: '25px', fontSize:'18px'}} > <Link className='Text_decoration' to='/List'> List </Link></Nav.Link>
                <NavDropdown title="Library" id="navbarScrollingDropdown">
                  <NavDropdown.Item ><Link className='Text_decoration'  to='/Music'> Musics </Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link className='Text_decoration'  to='/Books'> Books</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link className='Text_decoration'  to='/Movies'> Movies </Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link className='Text_decoration'  to='/Series'> Series</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link className='Text_decoration'  to='/VideoGames'> VideoGames </Link></NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item ><Link className='Text_decoration'  to='/All'> All </Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link ><Link className='Text_decoration'  to='/Access'> Access</Link></Nav.Link>
              </Nav>
              
              <Form className="d-flex">
                <Form.Control
                  value={searchValue}
                  onChange={handleChange}
                  type="search" 
                  name='search'
                  fontSize ='14px' 
                  placeholder="Search" 
                  className="me-2" aria-label="Search"
                />
              </Form>
            </Navbar.Collapse>

            <div className="resultList" >
              <div className="container justify-content-center alin-items-center" >
                <Row >
                    {
                      resultado.map((dato, id) => {
                        return (
                          <NavBarComplementCard
                            key={id}
                            {...dato}
                            />
                        )
                      })
                    }
                </Row>
              </div>
            </div>  
          </Container>
        </Navbar>
      </>
        
    ) 
}



