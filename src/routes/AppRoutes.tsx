import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Items from "../pages/Items";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/Items" element={<Items />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
