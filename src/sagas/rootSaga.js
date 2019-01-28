import { takeLatest } from "redux-saga/effects";
import ACTION from "../actions/actionType";
import * as developerSaga from "./developerSaga";

function* rootSaga() {
    yield takeLatest(ACTION.FETCH_ALL_USERS, developerSaga.FetchAllUsers);
    yield takeLatest(ACTION.FETCH_USERS_BY_ID, developerSaga.FetchUserById);
}

export default rootSaga;
