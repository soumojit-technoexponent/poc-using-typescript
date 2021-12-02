import React, { ChangeEvent, useState } from 'react';
import { Modal } from 'reactstrap';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/action';
import { Link } from 'react-router-dom';
import { loginType } from '../../interfaces';

type propsType = {
    loginModal: boolean,
    toggleLoginModal: any,
    toggleSignUpModal: any,
}

const LoginModal = (props: propsType) => {

    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [data, setData] = useState<loginType>({
        login_email: '',
        login_password: '',
        error: '',
    })

    //Hide & Show Password
    const onShowPassword = (): void => {
        setShowPassword(!showPassword);
    };

    const handleLoginChange = (prop: string) => (event: ChangeEvent<HTMLInputElement>): void => {
        setData({ ...data, [prop]: event.target.value });
    };

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(data);
        dispatch(loginAction(data));
        props.toggleLoginModal(!props.loginModal);
        setData({
            ...data,
            login_email: '',
            login_password: '',
        })
    }


    return (
        <div>
            <Modal isOpen={props.loginModal} toggle={props.toggleLoginModal}>
                <div className="modal-header">
                    <h3 className="modal-title" id="loginModalLabel">Sign In</h3>
                    <button type="button" className="close" onClick={props.toggleLoginModal} aria-label="Close">
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
                        <h6>Not yet a member? <Link to="" onClick={props.toggleSignUpModal}>Sign Up</Link>
                        </h6>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default LoginModal;
