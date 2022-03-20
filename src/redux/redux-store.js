import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import aboutMeReducer from "./aboutMeReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    aboutMePage: aboutMeReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;