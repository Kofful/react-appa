import { put } from "redux-saga/effects";
import {usersQueries} from "../api/graphql/resolvers/users";
import ACTION from "../actions/actionType";
import {getAllUsers, getUserById, deleteDeveloper} from "../api/rest/restController";

export function* fetchAllUsers() {
    console.log("sdfsdfsdf");
    yield put({ type: ACTION.USERS_REQUEST });
    try {
        const {data} = yield getAllUsers();
        yield put({ type: ACTION.USERS_RESPONSE, users: data });
    } catch (e) {
        yield put({ type: ACTION.USERS_ERROR, error: e });
    }
}

export function* fetchUserById({id}) {
    yield put({ type: ACTION.USERS_REQUEST });
    try {
        const {data} = yield getUserById(id);
        yield put({ type: ACTION.ONE_USER_RESPONSE, users: data });
    } catch (e) {
        yield put({ type: ACTION.USERS_ERROR, error: e });
    }
}

export function* deleteUser({user}) {
    yield put({ type: ACTION.DELETE_USER_REQUEST });
    try {
        const {data} = yield deleteDeveloper(user.id);
    } catch (e) {
        yield put({ type: ACTION.DELETE_USER_ERROR, user });
    }
}
