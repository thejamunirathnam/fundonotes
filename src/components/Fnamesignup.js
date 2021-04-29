import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class Fnamesignup extends Component {
    render() {
        return (
            <div className="Signinmain">
                <div className="row">
                    <div style={{ width: "100%" }}>
                        <p className="signfundo">
                            <span style={{ color: 'blue' }}>F</span>
                            <span style={{ color: 'red' }}>u</span>
                            <span style={{ color: 'yellow' }}>n</span>
                            <span style={{ color: 'blue' }}>d</span>
                            <span style={{ color: 'green' }}>o</span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <span className="signin">What’s your name?</span>
                </div>
                <div className="row">
                    <span className="signaccount">Enter the name on your Google Account</span>
                </div>
                <div className="signtextbox">
                    <div className="textdiv">
                        <TextField
                            label="First name"
                            fullWidth
                            variant="outlined"
                            id="lname"
                        />
                    </div>
                </div>
                <div className="signtextbox">
                    <div className="textdiv">
                        <TextField
                            label="Last name"
                            fullWidth
                            variant="outlined"
                            id="lname"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="column signbutton">
                        <div className="sign">
                            <span className="emaildiv" ></span>
                        </div>
                        <Button variant="contained" color="primary">
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fnamesignup
