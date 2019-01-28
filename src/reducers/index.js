import { combineReducers } from "redux";

import developerReducer from "./developerReducer";


const appReducer =  combineReducers({
    developerReducer//, newReducer, new2Reducer
});


const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
