import ACTION from "./actionType";

export const getAllUsersAction = () => {
    return {
        type: ACTION.FETCH_ALL_USERS
    };
};

export const getUserByIdAction = (id) => {
    return {
        type: ACTION.FETCH_USER_BY_ID,
        id
    };
}
