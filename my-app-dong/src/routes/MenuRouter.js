import { Routes, Route } from "react-router-dom";
import React from "react";
import Menu from "../components/Menu";

function MenuRouter() {
  return (
    <div>
      <Routes>
        <Route path="/menu" element={<Menu></Menu>}></Route>
      </Routes>
    </div>
  );
}

export default MenuRouter;
