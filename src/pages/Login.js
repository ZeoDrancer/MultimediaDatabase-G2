import "../App.css";
import { NavBar } from "../components/NavbarContainer/NavBar";
import { useState,useEffect } from 'react';
import ComprovantLogin from "../components/ComprovantLogin";


function Login() {
  
  const [token,setToken] = useState (false)

  if (token){
    sessionStorage.setItem('token',JSON.stringify(token));
  }

  useEffect ( ()=>{
    if(sessionStorage.getItem('token'))
    {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data);
    }

  },[])

  return (
    <div className="Access">
        <NavBar/>
        <div className = "contaner d-flex justify-content-center h-100 alin-items-center ">
            <div className="row">
              <ComprovantLogin  setTokengit ={setToken}/>
            </div>
        </div>
    </div>
  );
}

export default Login;