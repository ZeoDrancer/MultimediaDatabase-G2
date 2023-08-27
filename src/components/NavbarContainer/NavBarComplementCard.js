import "../../App.css";
import { Card } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export const NavBarComplementCard = ({ Categorie, 
                                Gener ,
                                Artist_Name, 
                                Album_Name, 
                              }) => {
  return (
    <div className = " justify-content-center alin-items-center ">
                <Card  className="bg-ligth border-light text-dark">
                    <Card.Header className="resultListText_A border-bottom border-light" >{ Categorie} :    { Artist_Name}</Card.Header>
                    <Card.Body >
                    <blockquote className= " resultListText_B ms-1 ">
                      <Row>
                        <Col>
                          <Row  style={{paddingInline: '20px'}} >Gener : </Row>
                          <Row  style={{paddingInline: '20px'}} >Recomendation : </Row>
                        </Col>
                        <Col >
                          <Row className="resultListText_C">{Gener}</Row>
                          <Row className="resultListText_C">{Album_Name}</Row>
                        </Col>
                      </Row>   
                    </blockquote>
                    </Card.Body>
                </Card>

    </div>
    
    
  )
}