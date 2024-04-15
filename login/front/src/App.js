import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

function App() {
  return (
    <div>
      <NavLink to="/login">로그인</NavLink>
      <br />
      <br />
      <NavLink to="/signup">회원가입</NavLink>

      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
