import { createStore } from "redux";
import menuReducer from "../reduce/menuReducer";

const store = createStore(menuReducer);

export default store;
