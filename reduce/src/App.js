import React from "react";
import { NavLink } from "react-router-dom";
import MenuRouter from "./routes/MenuRouter";
import { useSelector } from "react-redux";

function App() {
  const stores = useSelector((store) => {
    return store;
  });
  return (
    <>
      <div>
        <NavLink to="/menu">메뉴~</NavLink>
        <div>{stores.num}</div>
        <div style={{ marginBottom: 50 }}>{stores.title}</div>

        {/* router */}
        <MenuRouter></MenuRouter>
      </div>
    </>
  );
}

export default App;
