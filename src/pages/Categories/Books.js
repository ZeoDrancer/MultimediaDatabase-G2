import "../../App.css";
import { NavBar } from '../../components/NavbarContainer/NavBar';
import {useState, useEffect } from "react";
import { supabase } from "../../components/supabase/supabase";
import { AllPagesCard } from "../../components/AllPagesCard";
import { Row } from "react-bootstrap";


function Books() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      
      let { data: MultimediaBase, error } = await supabase
      .from('MultimediaBase')
      .select('*')
      .eq('Categorie', 'Book')

      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        console.log(MultimediaBase)
        setData(MultimediaBase);
      }
    }

    fetchData();
  }, []);



  return (
    <>
      <div className="allpages" >
      <div style={{paddingTop:'125px'}}></div>
        <NavBar/>
        <div className="container d-flex justify-content-center alin-items-center">
              <Row >
                  {
                    data.map((dato, id) => {
                      return (
                        <AllPagesCard
                          key={id}
                          {...dato}
                          />
                      )
                    })
                  }
              </Row>
            </div>
        </div>  
    
    </>
  )
}

export default Books;