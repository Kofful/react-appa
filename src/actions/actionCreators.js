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

export const createAccountAction = (createAccountData) => {
    return {
        type: ACTION.CREATE_ACCOUNT,
        createAccountData
    };
};

export const deleteUserAction = (user) => {
    return {
        type: ACTION.CREATE_ACCOUNT,
        user
    };
};