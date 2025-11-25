import { Link } from "react-router-dom";
import HomeIcon from "./icons/HomeIcon";
import HistoryIcon from "./icons/HistoryIcon";
import ItemsIcon from "./icons/ItemsIcon";
import DashIcon from "./icons/DashIcon";

const Header = () => {
  return (
    <header className="py-10 h-screen bg-white-100  w-24">
      <nav className=" bg-purple-base h-full rounded-r-full flex flex-col justify-center items-center gap-5">
        <Link to="/">
          <HomeIcon className="w-8 h-8 text-white-base hover:text-white-200 transition-transform duration-600 hover:rotate-360" />
        </Link>
        <Link to="/history">
          <HistoryIcon className="w-8 h-8 text-white-base hover:text-white-200 transition-transform duration-600 hover:rotate-360" />
        </Link>
        <Link to="/items">
          <ItemsIcon className="w-8 h-8 text-white-base hover:text-white-200 transition-transform duration-600 hover:rotate-360" />
        </Link>
        <Link to="/items">
          <DashIcon className="w-8 h-8 text-white-base hover:text-white-200 transition-transform duration-600 hover:rotate-360" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
