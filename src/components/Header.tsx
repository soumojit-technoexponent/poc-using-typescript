import React, { ChangeEvent, useState } from 'react';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import { Modal, NavLink } from 'reactstrap';

interface loginType {
    login_email: string,
    login_password: string,
    error: string,
};

const Header = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loginModal, setLoginModal] = useState<boolean>(false);

    const [data, setData] = useState<loginType>({
        login_email: '',
        login_password: '',
        error: '',
    })

    const onShowPassword = (): void => {
        setShowPassword(!showPassword);
    };
    const toggleLoginModal = (): void => {
        setLoginModal(!loginModal);
    };

    const handleLoginChange = (prop: string) => (event: ChangeEvent<HTMLInputElement>): void => {
        setData({ ...data, [prop]: event.target.value });
    };

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(data);
        if (data.login_email === "soumo@gmail.com" && data.login_password === "1234") {
            setData({
                ...data,
                login_email: '',
                login_password: ''
            })
            console.log("Login Success");
            localStorage.setItem('E-Mail', JSON.stringify(data.login_email));
            window.location.reload();
        }
        else {
            setData({
                ...data,
                error: "E-Mail or Password doesn't match"
            })
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
                <a className="navbar-brand" href="{#}">POC Using Typescript</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="{#}" data-toggle="modal" data-target="#signupModal">Sign Up</a>
                            {/* Sign Up Modal */}
                            <div className="modal fade" id="signupModal" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title" id="signupModalLabel">Sign Up</h3>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <TextField
                                                        label="Name"
                                                        variant="outlined"
                                                        required />
                                                </div>
                                                <div className="form-group">
                                                    <TextField
                                                        label="E-Mail"
                                                        variant="outlined"
                                                        required />
                                                </div>
                                                <div className="form-group">
                                                    <TextField
                                                        label="Mobile No"
                                                        variant="outlined"
                                                        required />
                                                </div>
                                                <div className="form-group">
                                                    <Button variant="contained" color="primary">
                                                        Sign Up
                                                    </Button>
                                                </div>
                                                <h6>Already a member? <a href="/" data-dismiss="modal" data-toggle="modal" data-target="#loginModal">Sign In</a>
                                                </h6>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/"} onClick={toggleLoginModal}>Log In</NavLink>
                            {/* Log In Modal */}
                            <Modal isOpen={loginModal} toggle={toggleLoginModal}>
                                <div className="modal-header">
                                    <h3 className="modal-title" id="loginModalLabel">Sign In</h3>
                                    <button type="button" className="close" onClick={toggleLoginModal} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group">
                                            <TextField
                                                label="E-Mail"
                                                variant="outlined"
                                                value={data.login_email}
                                                onChange={handleLoginChange('login_email')}
                                                required />
                                        </div>
                                        <div className="form-group">
                                            <FormControl id="outlined-basic" variant="outlined">
                                                <InputLabel>Password</InputLabel>
                                                <OutlinedInput
                                                    type={showPassword ? 'text' : 'password'}
                                                    value={data.login_password}
                                                    onChange={handleLoginChange('login_password')}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={onShowPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    labelWidth={80}
                                                />
                                            </FormControl>
                                        </div>
                                        {data.error !== '' ?
                                            <p className="text-danger">{data.error}</p>
                                            :
                                            null
                                        }
                                        <div className="form-group">
                                            <Button type="submit" variant="contained" color="primary">
                                                Sign In
                                            </Button>
                                        </div>
                                        <h6>Not yet a member?<a href="/" data-dismiss="modal" data-toggle="modal" data-target="#signupModal">Sign Up</a>
                                        </h6>
                                    </form>
                                </div>
                            </Modal>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;