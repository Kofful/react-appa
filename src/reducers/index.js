import { combineReducers } from "redux";

import developerReducer from "./developerReducer";
import currentUserReducer from "./currentUserReducer";


const appReducer =  combineReducers({
    developerReducer, currentUserReducer//, newReducer, new2Reducer
});


const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
