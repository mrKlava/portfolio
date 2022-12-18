import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { burgerReducer, modalReducer } from "./reducers";

const rootReducer = combineReducers({
    burgerReducer,
    modalReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}