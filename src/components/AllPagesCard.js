import "../App.css";
import { Card } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const AllPagesCard = ({ Categories, Gener ,Artist_Name, Album_Name, Publication_Date,Second_Gener, Discography }) => {
  return (
    <div className = "contaner d-flex justify-content-center alin-items-center ">
                <Card >
                    <Card.Header>{Artist_Name}</Card.Header>
                    <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <Row >
                        <Col >{Categories}</Col>
                        <Col >Mirar</Col>
                      </Row>
                      <Row  >
                        <Col >{Gener}</Col>
                        <Col >Mirar</Col>
                      </Row>
                      <Row  >
                        <Col >{Album_Name}</Col>
                        <Col >Mirar</Col>
                      </Row>
                      <Row>
                        <Col >{Publication_Date}</Col>
                        <Col >Mirar</Col>
                      </Row>
                      <Row>
                        <Col >{Second_Gener}</Col>
                        <Col >Mirar</Col>
                      </Row>
                      <Row >
                        <Col ><footer className="blockquote-footer">Director</footer></Col>
                        <Col ><cite title="Discography">{Discography}</cite></Col>
                      </Row>

                        
                    </blockquote>
                    </Card.Body>
                </Card>
    </div>
    
    
  )
}