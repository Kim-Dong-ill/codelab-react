import React from "react";
import { NavLink } from "react-router-dom";
import MenuRouter from "./routes/MenuRouter";

function App() {
  return (
    <div>
      <NavLink to="/menu">메뉴</NavLink>

      <MenuRouter></MenuRouter>
    </div>
  );
}

export default App;
