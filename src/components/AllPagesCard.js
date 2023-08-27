import "../App.css";
import { Card } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export const AllPagesCard = ({ Categorie, 
                                Gener ,
                                Artist_Name, 
                                Album_Name, 
                                Publication_Date,
                                Second_Gener, 
                                Discography,
                                Imagen
                              }) => {
  return (
    <div className = " justify-content-center alin-items-center col-sm-6">
                <Card  className="bg-dark border-warning text-light">
                    <Card.Header className="blockquote mb-0 border-bottom border-secondary" style={{ paddingTop: '20px'}}>{Artist_Name}</Card.Header>
                    <Card.Body >
                    <blockquote className="blockquote mb-0 text-light">
                      <Row>
                        <Col>
                        <img className="allpagesImagen rounded" src={Imagen} />
                        </Col>
                        <Col style={{paddingInline: '30px', paddingBottom: '0px'}}>
                          <Row style={{ paddingTop: '20px', paddingBottom: '10px'}}>{Categorie}</Row>
                          <Row style={{paddingBottom: '5px'}} >{Gener}</Row>
                          <Row style={{paddingBottom: '5px'}}>{Album_Name}</Row>
                          <Row style={{paddingBottom: '5px'}}>{Publication_Date} </Row>
                          <Row style ={{paddingBottom: '10px'}}>{Second_Gener}</Row>
                          <Row ><cite title="Discography">{Discography}</cite></Row>
                        </Col>
                      </Row>   
                    </blockquote>
                    </Card.Body>
                </Card>
                <div style={{paddingBottom: '20px'}}></div>
    </div>
    
    
  )
}