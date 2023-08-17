import "../App.css";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function HostBanner() {

  const[valueCategori, setValueCategorie] = useState('');
  const[value1, setValue1] = useState('---');
  const[value2, setValue2] = useState('---');
  const[value3, setValue3] = useState('---');
  const[value4, setValue4] = useState('---');
  const[value5, setValue5] = useState('---');
  const[value6, setValue6] = useState('---');

  const options = [
      {label:"Categories", value: "categories"},
      {label:"Musics", value: "Music"},
      {label:"Books", value: "Books"},
      {label:"Movies", value: "Movies"},
      {label:"Series", value: "Series"},
      {label:"VideoGames", value: "VideoGames"},
  ]

  function handleSelect(event)
  {
    setValueCategorie(event.target.value);
    
    if (valueCategori === "Music")
    {
      setValue1("Music Gener");
      setValue2("Artist Name");
      setValue3("Album Name");
      setValue4("Date of the publication");
      setValue5("Complementary Gener");
      setValue6("Discography");
    }

    if (valueCategori === "Books")
    {
      setValue1("Mirarr");
      setValue2("Mirarr");
      setValue3("Album Name");
      setValue4("Date of the publication");
      setValue5("Complementary Gener");
      setValue6("Discography");
    }

    if (valueCategori === "Movies")
    {
      setValue1("Mirarr");
      setValue2("Mirarr");
      setValue3("Mirarr");
      setValue4("Date of the publication");
      setValue5("Complementary Gener");
      setValue6("Discography");
    }

    if (valueCategori === "Series")
    {
      setValue1("Mirarr");
      setValue2("Mirarr");
      setValue3("Mirarr");
      setValue4("Mirarr");
      setValue5("Complementary Gener");
      setValue6("Discography");
    }

    if (valueCategori === "VideoGames")
    {
      setValue1("Mirarr");
      setValue2("Mirarr");
      setValue3("Mirarr");
      setValue4("Mirarr");
      setValue5("Mirarr");
      setValue6("Discography");
    }
  }
  return (
    <div className = "Card " style={{ width: '500px', paddingTop: '150px', height: '110%', textAlign: 'center'}}>
       <Form className = "card_Host rounded-4" >
          <Form.Group className="mb-3"  style={{ width: '90%', paddingTop: '40px', paddingLeft: '40px' }}>
            <Row style={{ paddingBottom: '20px'}}>
              <Col style={{ fontSize: '20px'}} > Multimedia Database Hosting</Col>
            </Row>
            <Row>
              <Col>Choose the category</Col>
              <Col style={{ paddingBottom: '10px'}}>
                <Form.Select aria-label="Categories" onChange={handleSelect}>
                  {options.map(option =>(
                     <option value = {option.value}>{option.label}</option>
                  ))}
                 </Form.Select>
              </Col>
            </Row>
            <Row value= {value1} >
              <Col >{value1}</Col>
              <Col >
                <Form.Group className="mb-1">
                  <Form.Control placeholder="         Write here" />
               </Form.Group>
              </Col>
            </Row>
            <Row  value= {value2} >
              <Col>{value2}</Col>
              <Col>
                <Form.Group className="mb-1">
                    <Form.Control placeholder="         Write here" />
                </Form.Group>
              </Col>
            </Row>
            <Row value= {value3}>
              <Col>{value3}</Col>
              <Col>
                <Form.Group className="mb-1">
                    <Form.Control placeholder="         Write here" />
                </Form.Group>
              </Col>
            </Row>
            <Row value= {value4} >
              <Col>{value4}</Col>
              <Col>
                <Form.Group className="mb-1">
                    <Form.Control placeholder="         Write here" />
                </Form.Group>
              </Col>
            </Row>
            <Row value= {value5}>
              <Col>{value5}</Col>
              <Col>
                <Form.Group className="mb-1">
                    <Form.Control placeholder="         Write here" />
                </Form.Group>
              </Col>
            </Row>
            <Row value= {value6}>
              <Col>{value6}</Col>
              <Col style = {{paddingBottom:"15px"}}>
                <Form.Group className="mb-1">
                    <Form.Control placeholder="         Write here" />
                </Form.Group>
              </Col>
            </Row>
            <Button
            variant="primary justify-content-center  alin-items-center"
            type='submit'>
              Ready and Save
            </Button>
          </Form.Group>
      </Form>
    </div>
  )
}

export default HostBanner;
