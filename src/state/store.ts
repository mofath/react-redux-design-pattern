import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reucers from "./reducer";

export const store = createStore(reucers, {}, applyMiddleware(thunk));