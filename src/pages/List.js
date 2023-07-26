import "../App.css";
import {Projects} from "../components/Project";
import { NavBar } from "../components/NavBar";

function List() {
  return (
    <div className="List">
      <NavBar/> 
      <Projects/>
    </div>
  );
}

export default List;