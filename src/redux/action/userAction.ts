import axios from 'axios';

export const fetchUsersRequest = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
}


export const fetchUsersSuccess = (users: any) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users
    }
}

export const fetchUsersFailure = (error: string) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error
    }
}

export const updateLikes = (id: number, count: number) => {
    return {
        type: 'UPDATE_LIKES',
        payload: {
            id: id,
            count: count
        }
    }
}

export const updateDislikes = (id: number, count: number) => {
    return {
        type: 'UPDATE_DISLIKES',
        payload: {
            id: id,
            count: count
        }
    }
}

export const fetchUsers = () => {
    return (dispatch: any) => {
        dispatch(fetchUsersRequest())
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the users
                const users = response.data
                users.forEach((element: { islike: number; likecount: number; dislikecount: number; }) => {
                    element.islike = 0;
                    element.likecount = 0;
                    element.dislikecount = 0;

                });
                dispatch(fetchUsersSuccess(users))
                console.log(users);
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message))
            })
    }
}