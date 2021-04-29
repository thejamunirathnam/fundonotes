import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";

export class Forgotmail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: null
        }
    }

    fname = () => {
        this.setState({ redirect: "/namesignup" });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
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
                    <span className="signin">Find your email</span>
                </div>
                <div className="row">
                    <span className="signaccount">Enter your phone number or recovery email</span>
                </div>
                <div className="signtextbox">
                    <div className="textdiv">
                        <TextField
                            type="email"
                            fullWidth
                            // helperText="You can use letters, numbers & periods"
                            label="Phone number or email"
                            // error={this.state.email}
                            // label={this.state.emaillabel}
                            // helperText={this.state.error ? this.state.emailText : this.state.email}
                            variant="outlined"
                            id="emailid"
                        // onChange={
                        //     event => this.dataa.email.event.target.value
                        // }
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="column signbutton">
                        <div className="sign">
                            <span className="emaildiv" ></span>
                        </div>
                        <Button variant="contained" color="primary" onClick={this.fname}>
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forgotmail
