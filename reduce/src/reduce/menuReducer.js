const initialStore = {
  num: 1,
  title: "타이틀",
};

const menuReducer = (state = initialStore, action) => {
  if (action.type === "plus") {
    return { ...state, num: state.num + action.payload };
  } else if (action.type === "titleChange") {
    return { ...state, title: action.payload };
  }
  return state;
};

export default menuReducer;
