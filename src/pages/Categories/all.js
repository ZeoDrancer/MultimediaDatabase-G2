import "../../App.css";
import { NavBar } from '../../components/NavBar';
import { useState, useEffect } from 'react';
import { supabase } from "../../components/supabase/supabase";


function All() {
  
    const [categories, setCategories] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    
 
  useEffect ( ()=>{

    const getItems = async () => {  
      let { data: MultimediaBase, error } = await supabase
      .from('MultimediaBase')
      .select('*')

        if(error)
        {
            setFetchError('Sucedio un Error, intentelo más tarde');
            setCategories(null);
            console.log(error);
        }

        if(MultimediaBase)
        {
            setFetchError(null);
            setCategories(MultimediaBase);
            console.log(MultimediaBase);
        }
    };
    
    getItems();
  },[])

  return (
    <div className="allpages">
        <NavBar/>
    </div>
  );
}

export default All;