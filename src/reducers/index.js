// Barrel file for presentational components, which will be used to compose our smart containers;
// import loggedReducer from  "./islogged";
// import {combineReducers} from "redux";

// const allReducers = combineReducers({
//     logged: loggedReducer
// });

// export default allReducers;

export { default as loggedReducer } from "../store/utilities/islogged";
export { default as cartReducer } from "../store/utilities/cartReducer";
