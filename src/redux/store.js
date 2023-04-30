
import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import userSaga from "./saga"
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:rootReducer,
    middleware:()=> [sagaMiddleware]
}
)
// export const store = createStore(
//   rootReducer
//   //applyMiddleware(sagaMiddleware)
// );

sagaMiddleware.run(userSaga);

export default store;
