import React from "react";
import MyRoutes from "./MyRoutes";
import "./App.css";
import "./bootstrap.css";
import GlobalContextProvider from "./components/GlobalContext";
import { combineReducers, createStore } from "redux";
import counterReducer from "./components/redux-example/counterReducer";
import { Provider } from "react-redux";
import gameReducer from "./components/redux-example/gameReducer";

function App() {
  const rootReducer = combineReducers({
    counter: counterReducer,
    game: gameReducer,
  });

  const myStore = createStore(rootReducer);

  return (
    <>
      {/* <GlobalContextProvider> */}
      <Provider store={myStore}>
        <MyRoutes />
      </Provider>
      {/* </GlobalContextProvider> */}
    </>
  );
}

export default App;
