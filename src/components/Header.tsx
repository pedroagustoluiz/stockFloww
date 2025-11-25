import { Link } from "react-router-dom";
import homeIcon from "../assets/home.svg";
import history from "../assets/history.svg";
import items from "../assets/items.svg";
import dash from "../assets/dash.svg";

const Header = () => {
  return (
    <header className="bg-white-100 h-screen w-24">
      <nav className="bg-purple-base h-screen">
        <Link to="/">
          <img src={homeIcon} alt="Home" />
        </Link>
        <Link to="/history">
          <img src={history} alt="historico" />
        </Link>
        <Link to="/items">
          <img src={items} alt="items" />
        </Link>
        <Link to="/items">
          <img src={dash} alt="dashboard" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
