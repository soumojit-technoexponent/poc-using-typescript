import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducer/index";

import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;