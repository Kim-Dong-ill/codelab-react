import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

const counterStore = createSlice({
  name: "countNum",
  initialState: { num: 0 },
  reducers: {
    up: (state, action) => {
      state.num = state.num + action.payload;
    },
  },
});

const counterStore1 = createSlice({
  name: "countNum1",
  initialState: { num1: 100 },
  reducers: {
    up: (state, action) => {
      state.num1 = state.num1 + action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterStore.reducer,
    counter1: counterStore1.reducer,
  },
});
function App() {
  return (
    <>
      <Provider store={store}>
        <div>test</div>

        <ChildOne></ChildOne>
      </Provider>
    </>
  );
}

function ChildOne() {
  const dispatch = useDispatch();
  const num = useSelector((state) => {
    return state.counter.num;
  });
  const num1 = useSelector((state) => {
    return state.counter1.num1;
  });
  return (
    <div>
      test / {num} / {num1}
      <button
        onClick={() => {
          dispatch(counterStore.actions.up(1));
        }}
      >
        클릭
      </button>
      <button
        onClick={() => {
          dispatch(counterStore1.actions.up(100));
        }}
      >
        클릭 2
      </button>
    </div>
  );
}

export default App;
