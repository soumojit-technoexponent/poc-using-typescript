import { useState, useEffect } from 'react';
import Header from "./Header";
import axios from 'axios';


interface userType {
    id: number,
    name: string,
    email: string,
    company: {
        name: string
    },
    // islike:number,
    // likecount:number,
    // dislikecount:number

};

// const defaultPosts:userType[] = [];

export const UserContainer = () => {
    
    // const [users, setUser]: [userType[], (users: userType[]) => void] = React.useState(defaultPosts);

    const [users, setUser] = useState<userType[]>([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const result = response.data
                // result.forEach(element => {
                //     element.islike = 0;
                //     element.likecount = 0;
                //     element.dislikecount = 0;

                // });
                setUser(result);
            })
            .catch(error => {
                console.log(error)
            });
    }, [users]);
    
    return (
        <div>
            <Header />
            <div className="container-fluid py-4">
                <div className="row d-flex justify-content-between">
                    {users.map(user =>
                        <li key={user.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text mb-1">
                                    E-Mail: <b>{user.email}</b>
                                </p>
                                <small>
                                    Company: <b>{user.company.name}</b>
                                </small>
                                <br /><br />
                            </div>
                        </li>
                    )}
                </div>
            </div>
        </div>
    )
}
