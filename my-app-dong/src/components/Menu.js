import React from "react";
import { useDispatch, useSelector } from "react-redux";
import titleStore from "../store/titleStore";

function Menu() {
  const dispatch = useDispatch();

  const states = useSelector((state) => {
    return state.title;
  });
  return (
    <>
      <div>Menu</div>
      <div>{states.title}</div>
      <button
        onClick={() => {
          dispatch(titleStore.actions.titleChange("타이틀 변경 완료!!!"));
        }}
      >
        변경 버튼
      </button>
    </>
  );
}

export default Menu;
