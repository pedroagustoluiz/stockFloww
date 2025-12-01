import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Items from "../pages/Items";
import Home from "../pages/Home";
import Item from "../pages/Item";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Item" element={<Item />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
