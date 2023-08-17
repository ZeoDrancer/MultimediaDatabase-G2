import "../App.css";
import { NavBar } from "../components/NavBar";
import HostBanner from "../components/HostBanner";

function Host() {
  return (
    <div className="Host" >
      <NavBar/> 
      <div className = "contaner d-flex justify-content-center h-100 alin-items-center ">
            <div className="row">
              <HostBanner/>
            </div>
        </div>
      
    </div>
  );
}

export default Host;