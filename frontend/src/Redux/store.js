import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as petData } from "./Pets/reducer";

const rootReducer = combineReducers({
  petData
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
