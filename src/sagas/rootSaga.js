import { takeLatest } from "redux-saga/effects";
import ACTION from "../actions/actionType";
import * as developerSaga from "./developerSaga";

function* rootSaga() {
    try {
        yield takeLatest(ACTION.FETCH_ALL_USERS, developerSaga.fetchAllUsers);
        yield takeLatest(ACTION.FETCH_USERS_BY_ID, developerSaga.fetchUserById);
    } catch(e) {
        console.log(e);
    }
    
    
}

export default rootSaga;
