import "../App.css";
import { NavBar } from "../components/NavbarContainer/NavBar";
import { Banner } from "../components/Banner";

function Home() {
  return (
    <div className="Home" >
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default Home;