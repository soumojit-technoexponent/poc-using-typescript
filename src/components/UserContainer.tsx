import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateDislikes, updateLikes } from '../redux/action';
import { useEffect, useState } from "react";
import { RootState } from "../redux/reducer";
import { authData, userData, userType } from "../interfaces";
import LoginModal from './Modal/LoginModal';
import SignUpModal from './Modal/SignUpModal';


const UserContainer = () => {

    const dispatch = useDispatch();
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [signUpModal, setSignUpModal] = useState<boolean>(false);

    const userData: userData = useSelector((state: RootState) => state.userReducer);
    const authData: authData = useSelector((state: RootState) => state.authReducer);

    //Modal
    const toggleLoginModal = (): void => {
        setLoginModal(!loginModal);
        setSignUpModal(false);
    };

    const toggleSignUpModal = (): void => {
        setSignUpModal(!signUpModal);
        setLoginModal(false);
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])


    return (
        <div>
            <main>
                <div className="container py-4">
                    {authData.currentuser !== '' ?
                        <>
                            <div className="d-flex justify-content-between">
                                <h2 className="text-light">Welcome {authData.currentuser} !!</h2>
                            </div>
                        </>
                        :
                        <h2 className="text-light">You're logged out</h2>
                    }
                    <div className="row d-flex justify-content-between">
                        {userData && userData.users.map((user: userType) =>
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
                                    {authData.currentuser ?
                                        <div>
                                            {
                                                (user.islike === 0) ?
                                                    <>
                                                        <i className="fas fa-thumbs-up text-success"
                                                            style={{ cursor: 'pointer', userSelect: 'none' }}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                dispatch(updateLikes(user.id, 1))
                                                            }}>
                                                        </i>
                                                        &nbsp;&nbsp;&nbsp;
                                                        <i className="fas fa-thumbs-down text-danger"
                                                            style={{ cursor: 'pointer', userSelect: 'none' }}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                dispatch(updateDislikes(user.id, 2))
                                                            }}>
                                                        </i>
                                                    </>
                                                    :
                                                    null
                                            }

                                            {
                                                (user.islike === 1) ?
                                                    <>
                                                        <i className="fas fa-thumbs-down text-danger"
                                                            style={{ cursor: 'pointer', userSelect: 'none' }}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                dispatch(updateDislikes(user.id, 2))
                                                            }}>
                                                        </i>
                                                    </>
                                                    :
                                                    null
                                            }

                                            {
                                                (user.islike === 2) ?
                                                    <>
                                                        <i className="fas fa-thumbs-up text-success"
                                                            style={{ cursor: 'pointer', userSelect: 'none' }}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                dispatch(updateLikes(user.id, 1))
                                                            }}>
                                                        </i>
                                                    </>
                                                    :
                                                    null
                                            }
                                            &nbsp;
                                            <p className="mb-0">Likes: {user.likecount}</p>
                                            <p>Dislikes: {user.dislikecount}</p>
                                        </div>
                                        :
                                        <>
                                            <i className="fas fa-thumbs-up text-success"
                                                style={{ cursor: 'pointer', userSelect: 'none' }}
                                                onClick={toggleLoginModal}
                                            >
                                            </i>
                                            &nbsp;&nbsp;&nbsp;
                                            <i className="fas fa-thumbs-down text-danger"
                                                style={{ cursor: 'pointer', userSelect: 'none' }}
                                                onClick={toggleLoginModal}>
                                            </i>

                                        </>
                                    }
                                </div>
                            </li>
                        )}
                    </div>
                    {loginModal ? <LoginModal loginModal={loginModal} toggleLoginModal={toggleLoginModal} toggleSignUpModal={toggleSignUpModal} /> : null}
                    {signUpModal ? <SignUpModal signUpModal={signUpModal} toggleSignUpModal={toggleSignUpModal} toggleLoginModal={toggleLoginModal} /> : null}
                </div>
            </main>
        </div>
    )
}

export default UserContainer;
