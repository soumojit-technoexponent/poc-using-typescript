import { combineReducers } from "redux";
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    userReducer,
    authReducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>