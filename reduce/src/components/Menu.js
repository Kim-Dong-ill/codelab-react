import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Menu() {
  const disPatch = useDispatch();
  const stores = useSelector((store) => {
    return store;
  });
  return (
    <div>
      Menu
      <br />
      {stores.num}
      {stores.title}
      <button
        onClick={() => {
          disPatch({ type: "plus", payload: 1 });
        }}
      >
        숫자+1
      </button>
      <button
        onClick={() => {
          disPatch({ type: "titleChange", payload: "변경 완료!" });
        }}
      >
        타이틀 변경
      </button>
    </div>
  );
}

export default Menu;
