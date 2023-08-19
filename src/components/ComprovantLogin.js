import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import "../App.css";
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from './supabase/supabase';


const ComprovantLogin = () => {

  let navigate = useNavigate();

  const [formData, setformData] = useState({
    email:'', password:'',
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

  async function hangleSubmit (e)
  {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email:formData.email,
        password: formData.password,
      })

      if (error) throw error
        console.log(data);
        navigate('/Host')
    } 
    catch (error){
      alert(error)
    }
    
  }
  
  return (
    <div className = "Card " style={{ width: '400px', paddingTop: '175px', height: '115%', textAlign: 'center'}}>

        <Form className = "card_Address rounded-4" onSubmit={hangleSubmit}>
            <Form.Group className="mb-3"  style={{ width: '90%', paddingTop: '40px', paddingLeft: '40px' }}>
                <Form.Label style={{textAlign: 'left'}}>Email address</Form.Label>
                <Form.Control  onChange ={handleChange}  type="email" name ="email" placeholder="examplename@example.com" />
            </Form.Group>
            <Form.Group className="mb-3 " style={{width: '90%', paddingTop: '25px', paddingLeft: '40px', paddingBottom: '20PX'}}>
                <Form.Label style={{textAlign: 'left'}}>Contraseña</Form.Label>
                <Form.Control  onChange ={handleChange}  type="password" name="password" placeholder="****************" />
            </Form.Group>
        <Button
            variant="primary justify-content-center  alin-items-center"
            type='submit'
        >
          Click to Login
        </Button>
        <h6 style={{ paddingTop: '25px', paddingBottom: '0PX'}}> Don't have account? </h6>
        <Link to ='/Access'> Sign Up </Link>
        </Form>
    </div>
  )
}

export default ComprovantLogin;
