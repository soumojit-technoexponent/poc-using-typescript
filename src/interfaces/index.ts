export interface userType {
    id: number,
    name: string,
    email: string,
    company: {
        name: string
    },
    islike: number,
    likecount: number,
    dislikecount: number,
    count: number

};

export interface userData {
    loading: boolean,
    users: userType[],
    error: string
}

export interface authData {
    isLoggedIn: boolean,
    currentuser: string
}