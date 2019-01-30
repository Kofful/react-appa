import { takeLatest } from "redux-saga/effects";
import ACTION from "../actions/actionType";
import * as developerSaga from "./developerSaga";
import * as currentUserSaga from "./currentUserSaga";

function* rootSaga() {
    try {
        yield takeLatest(ACTION.FETCH_ALL_USERS, developerSaga.fetchAllUsers);
        yield takeLatest(ACTION.FETCH_USERS_BY_ID, developerSaga.fetchUserById);
        yield takeLatest(ACTION.CREATE_ACCOUNT, currentUserSaga.createAccount);
        yield takeLatest(ACTION.DELETE_USER, developerSaga.deleteUser);
    } catch(e) {
        console.log(e);
    }
    
    
}

export default rootSaga;
