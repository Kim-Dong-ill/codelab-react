import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "../components/Menu";

function MenuRouter() {
  return (
    <div>
      <Routes>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </div>
  );
}

export default MenuRouter;
