import ACTION from "../actions/actionType";

const initialState = {
    data: null,
    isFetching: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ACTION.USERS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            };
        }
        case ACTION.USERS_RESPONSE: {
            return {
                ...state,
                users: action.users,
                error: null,
                isFetching: false
            };
        }
        case ACTION.USERS_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        }
        case ACTION.ONE_USER_RESPONSE: {
            const oldState = {...state};
            const index = oldState.users.findIndex((user) => undefined.id === action.user.id);
            if(index === -1) {
                oldState.users.push(action.user);
            } else {
                oldState.users[index] = action.user;
            }
            return {
                ...oldState,
                error: null,
                isFetching: false
            };
        }
        default: {
            return state;
        }
    }
}
