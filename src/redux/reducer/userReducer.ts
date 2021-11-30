import { userType } from "../../interfaces"

type CurrentState = {
    loading: boolean,
    users: userType[],
    error: string
}

type CurrentAction = {
    type: string
    payload: {
        users: userType,
        id: number,
        count: number
    }
}

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state: CurrentState = initialState, action: CurrentAction) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_USERS_SUCCESS':
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case 'FETCH_USERS_FAILURE':
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        case 'UPDATE_LIKES':
            return {
                loading: false,
                users: state.users.map((user) =>
                    user.id === action.payload.id
                        ?
                        {
                            ...user,
                            islike: action.payload.count,
                            likecount: user.likecount + 1,
                            dislikecount: (user.dislikecount - 1 < 0) ?
                                user.dislikecount
                                :
                                0,
                        }
                        :
                        user
                ),
                error: ''
            }
        case 'UPDATE_DISLIKES':
            return {
                loading: false,
                users: state.users.map((user) =>
                    user.id === action.payload.id
                        ?
                        {
                            ...user,
                            islike: action.payload.count,
                            likecount: (user.likecount - 1 < 0) ?
                                user.likecount
                                :
                                0,
                            dislikecount: user.dislikecount + 1
                        }
                        :
                        user
                ),
                error: ''
            }
        default: return state
    }
}

export default userReducer;
