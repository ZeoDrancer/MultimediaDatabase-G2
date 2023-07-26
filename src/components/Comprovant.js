import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useEffect,useState } from 'react';
import "../App.css";
import React from 'react'


function Comprovant() {

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
    function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
    }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <div className = "Card " style={{ width: '400px', paddingTop: '150px', height: '110%', textAlign: 'center'}}>

        <Form className = "card_Address rounded-4">
            <Form.Group className="mb-3" style={{ width: '90%', paddingTop: '75px', paddingLeft: '40px' }}>
                <Form.Label style={{textAlign: 'left'}}>Email address</Form.Label>
                <Form.Control type="email" placeholder="examplename@example.com" />
            </Form.Group>
            <Form.Group className="mb-3 " style={{width: '90%', paddingTop: '25px', paddingLeft: '40px', paddingBottom: '35PX'}}>
                <Form.Label style={{textAlign: 'left'}}>Contraseña</Form.Label>
                <Form.Control type="Contraseña" placeholder="****************" />
            </Form.Group>

        <Button
            variant="primary justify-content-center  alin-items-center"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
        >
            {isLoading ? 'Loading…' : 'Click to load'}
        </Button>

        </Form>
       
        
    </div>
  )
}

export default Comprovant;
