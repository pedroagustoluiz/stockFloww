import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="flex gap-5">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
