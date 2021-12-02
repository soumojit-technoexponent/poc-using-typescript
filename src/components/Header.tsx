import React, { ChangeEvent, useState } from 'react';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
import { Modal } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';
import { logoutAction } from '../redux/action';
import { authData } from '../interfaces';
import { Link } from 'react-router-dom';
import LoginModal from './Modal/LoginModal';
import SignUpModal from './Modal/SignUpModal';


const Header = () => {

    const dispatch = useDispatch();
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [signUpModal, setSignUpModal] = useState<boolean>(false);

    const authData: authData = useSelector((state: RootState) => state.authReducer);

    // console.log(authData);

    //Modal
    const toggleLoginModal = (): void => {
        setLoginModal(!loginModal);
        setSignUpModal(false);
    };
    const toggleSignUpModal = (): void => {
        setSignUpModal(!signUpModal);
        setLoginModal(false);
    }

    //Logout
    const onLogout = () => {
        dispatch(logoutAction());
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                <div className="container">
                    <Link className="navbar-brand" to="/">POC Using Typescript</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {authData.isLoggedIn === false ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="" onClick={toggleSignUpModal}>Sign Up</Link>
                                        {/* Sign Up Modal */}
                                        {signUpModal ? <SignUpModal signUpModal={signUpModal} toggleSignUpModal={toggleSignUpModal} toggleLoginModal={toggleLoginModal} /> : null}

                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={""} onClick={toggleLoginModal}>Log In</Link>
                                        {/* Log In Modal */}
                                        {loginModal ? <LoginModal loginModal={loginModal} toggleLoginModal={toggleLoginModal} toggleSignUpModal={toggleSignUpModal} /> : null}
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Button variant="contained" color="secondary" onClick={onLogout}>
                                            Logout
                                        </Button>
                                    </li>
                                </>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;