import { createStore, combineReducers } from "redux";
import { dashboardReducer } from "./reducers/reducer.js";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export const store = createStore(rootReducer);

export default store;
