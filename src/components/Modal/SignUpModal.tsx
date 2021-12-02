import { Modal } from 'reactstrap';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

type propsType = {
    signUpModal: boolean,
    toggleSignUpModal: any,
    toggleLoginModal: any
}

const SignUpModal = (props: propsType) => {

    return (
        <div>
            <Modal isOpen={props.signUpModal} toggle={props.toggleSignUpModal}>
                <div className="modal-header">
                    <h3 className="modal-title" id="loginModalLabel">Sign Up</h3>
                    <button type="button" className="close" onClick={props.toggleSignUpModal} aria-label="Close">
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
                        <h6>Already a member? <Link to={""} onClick={props.toggleLoginModal}>Log In</Link>
                        </h6>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default SignUpModal
