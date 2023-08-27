import "../App.css";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import React from 'react';
import {useState, useEffect} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { supabase } from "./supabase/supabase";


function HostBanner() {

  const[valueCategori, setValueCategorie] = useState('');

  const[value1, setValue1] = useState('---');
  const[value2, setValue2] = useState('---');
  const[value3, setValue3] = useState('---');
  const[value4, setValue4] = useState('---');
  const[value5, setValue5] = useState('---');
  const[value6, setValue6] = useState('---');

  const options = [
      {label:"Categories", value: "Categorie"},
      {label:"Musics", value: "Music"},
      {label:"Books", value: "Book"},
      {label:"Movies", value: "Movie"},
      {label:"Series", value: "Serie"},
      {label:"VideoGames", value: "VideoGame"},
  ]

 
  function handleSelect(event)
  {
    setValueCategorie(event.target.value);
  }

  useEffect (() => {


    if (valueCategori === "Categorie")
    {
      setValue1("---");
      setValue2("---");
      setValue3("---");
      setValue4("---");
      setValue5("---");
      setValue6("---");
      console.log(valueCategori);
    }

    if (valueCategori === "Music")
    {
      setValue1("Music Gener");
      setValue2("Artist Name");
      setValue3("Album Name");
      setValue4("Date of the publication");
      setValue5("Complementary Gener");
      setValue6("Discography");
      console.log(valueCategori);
    }

    if (valueCategori === "Book")
    {
      setValue1("Books Gener");
      setValue2("Name of the Book");
      setValue3("Autor of the Book");
      setValue4("Year of publication");
      setValue5("Complementary Gener");
      setValue6("Editorial");
      console.log(valueCategori);
    }

    if (valueCategori === "Movie")
    {
      setValue1("Books Gener");
      setValue2("Name of the Movie");
      setValue3("Director of the Movie");
      setValue4("Year of premiere");
      setValue5("Complementary Gener");
      setValue6("Producer");
      console.log(valueCategori);
    }

    if (valueCategori === "Serie")
    {
      setValue1("Serie Gener");
      setValue2("Name of the Serie");
      setValue3("Creator");
      setValue4("Year of premiere");
      setValue5("Complementary Gener");
      setValue6("Streaming plataform");
      console.log(valueCategori);
    }

    if (valueCategori === "VideoGame")
    {
      setValue1("VideoGame Gener");
      setValue2("Name of the VideoGame");
      setValue3("Creator");
      setValue4("Year of premiere");
      setValue5("Complementary Gener");
      setValue6("Producer Company");
      console.log(valueCategori);
    }
  },[valueCategori])


  const [formData, setformData] = useState({
    Categorie:'', Gener:'', Artist_Name:'', Album_Name:'', Publication_Date:'', Second_Gener:'', Discography:'', Imagen:'',
  });

  console.log(formData);
  
  function handleChange (event){
     setformData((prevformData) =>{
      return {
        ...prevformData,
        [event.target.name]:event.target.value
      }
     })
  }

  const clickSave = async () => {

    try {

        const { data, error } = await supabase
        .from('MultimediaBase')
        .insert([
          { 
            Categorie: valueCategori, 
            Gener: formData.Gener,
            Artist_Name: formData.Artist_Name, 
            Album_Name: formData.Album_Name,
            Publication_Date: formData.Publication_Date, 
            Second_Gener: formData.Second_Gener,
            Discography: formData.Discography,
            Imagen: formData.Imagen},
        ])

        if(data){
          console.log(data);
        }
    } 
    catch (error) 
    {
      console.log(error);   
    }

  }


  return (
    <div className = "Card " style={{ width: '500px', paddingTop: '110px', height: '110%', textAlign: 'center'}}>
       <Form className = "card_Host rounded-4"  >
          <Form.Group className="mb-3"  style={{ width: '90%', paddingTop: '40px', paddingLeft: '40px' }}>
            <Row style={{ paddingBottom: '20px'}}>
              <Col style={{ fontSize: '20px'}} > Multimedia Database Hosting</Col>
            </Row>
            <Row>
              <Col>Choose the category</Col>
              <Col style={{ paddingBottom: '10px'}}>
                <Form.Select aria-label="Categories" type="Categorie" name ="Categorie" onChange={handleSelect}>
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
                  <Form.Control  onChange ={handleChange} type="Gener" name ="Gener" placeholder="         Write here" />
               </Form.Group>
              </Col>
            </Row>
            <Row  value= {value2} >
              <Col>{value2}</Col>
              <Col>
                <Form.Group className="mb-1" >
                    <Form.Control onChange ={handleChange} type="Artist_Name" name ="Artist_Name" placeholder="         Write here" />
                </Form.Group>
              </Col>
            </Row>
            <Row value= {value3}>
              <Col>{value3}</Col>
              <Col>
                <Form.Group className="mb-1">
                    <Form.Control onChange ={handleChange} type="Album_Name" name ="Album_Name" placeholder="         Write here" />
                </Form.Group>
              </Col>
            </Row>
            <Row value= {value4} >
              <Col>{value4}</Col>
              <Col>
                <Form.Group className="mb-1">
                    <Form.Control onChange ={handleChange} type="Publication_Date" name ="Publication_Date" placeholder="         Write here" />
                </Form.Group>
              </Col>
            </Row>
            <Row value= {value5}>
              <Col>{value5}</Col>
              <Col>
                <Form.Group className="mb-1">
                    <Form.Control onChange ={handleChange} type="Second_Gener" name ="Second_Gener" placeholder="         Write here" />
                </Form.Group>
              </Col>
            </Row>
            <Row value= {value6}>
              <Col>{value6}</Col>
              <Col >
                <Form.Group className="mb-1">
                    <Form.Control onChange ={handleChange} type="Discography" name ="Discography" placeholder="         Write here" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>Url Imagen</Col>
              <Col style = {{paddingBottom:"15px"}}>
                <Form.Group className="mb-1">
                    <Form.Control onChange ={handleChange} type="Imagen" name ="Imagen" placeholder="         Write here" />
                </Form.Group>
              </Col>
            </Row>
            <Button
            variant="primary justify-content-center  alin-items-center"
            onClick={clickSave}>
              Ready and Save
            </Button>
          </Form.Group>
      </Form>
    </div>
  )
}

export default HostBanner;
