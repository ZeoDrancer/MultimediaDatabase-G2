import "../App.css";
import {Projects} from "../components/Project";
import { NavBar } from "../components/NavbarContainer/NavBar";

function List() {
  return (
    <div className="List">
      <NavBar/> 
      <Projects/>
    </div>
  );
}

export default List;