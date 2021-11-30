import { combineReducers } from "redux";
// import loginReducer from './loginReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    userReducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>