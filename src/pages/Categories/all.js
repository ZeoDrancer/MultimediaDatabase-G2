import "../../App.css";
import { NavBar } from '../../components/NavBar';
import {useState, useEffect } from "react";
import { supabase } from "../../components/supabase/supabase";
import { AllPagesCard } from "../../components/AllPagesCard";


function All() {


  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      
      let { data: MultimediaBase, error } = await supabase
      .from('MultimediaBase')
      .select('*')

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
    <div className=" allpages bg-warning" >
    <div style={{paddingTop:'125px'}}></div>
      <NavBar/>
      <div className="container bg-info">
        <div className="row">
            <div className = "col-md-4">
                <AllPagesCard/>
            </div>
            <div className = "col-md-4">
                <AllPagesCard/>
            </div>
            <div className = "col-md-4">
                <AllPagesCard/>
            </div>
          </div>
      </div>   
    </div>
  )
}

export default All;