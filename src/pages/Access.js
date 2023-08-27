import "../App.css";
import { NavBar } from "../components/NavbarContainer/NavBar";
import Comprovant from "../components/Comprovant";

function Access() {
  return (
    <div className="Access">
        <NavBar/>
        <div className = "contaner d-flex justify-content-center h-100 alin-items-center ">
            <div className="row">
                <Comprovant/>
            </div>
        </div>
    </div>
  );
}

export default Access;