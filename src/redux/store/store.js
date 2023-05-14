import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../rootReducer";

//import userSaga from "./saga"
import createSagaMiddleware from "redux-saga";
import rootSaga from "../rootSaga";

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

sagaMiddleware.run(rootSaga);

export default store;