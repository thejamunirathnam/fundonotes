import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";
import Userservice from '../services/Userservice';
const axios_service = new Userservice();



export class SignInpage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        redirect: null,
        email:''
      }
    }

    forgotmail = () => {
        this.setState({ redirect: "/Forgot" });
    }

    signuppage = () =>{
        this.setState({ redirect: "/" });
    }


    change = e => {
        this.setState({
          [e.target.name]: e.target.value
        },()=>{
            // console.log(this.state);
        });
      }

    next = () =>{
        this.setState({ redirect: "/password" });
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
                    <span className="signin">Sign in</span>
                </div>
                <div className="row">
                    <span className="signaccount">Use your Google Account</span>
                </div>
                <div className="signtextbox">
                    <div className="textdiv">
                        <TextField
                            type="email"
                            fullWidth
                            // helperText="You can use letters, numbers & periods"
                            label="Email or Phone"
                            // error={this.state.email}
                            // label={this.state.emaillabel}
                            // helperText={this.state.error ? this.state.emailText : this.state.email}
                            variant="outlined"
                            id="emailid"
                            name="email"
                            onChange = {this.change}
                        />
                    </div>
                </div>
                <div className="textinputbox" >
                    <div className="emaildiv" onClick={this.forgotmail}>
                        Forgot email?
                    </div>
                </div>
                <div className="textinputbox" >
                    <div className="learn">
                    Not your computer? Use Guest mode to sign in privately.
                    </div>
                </div>
                <div className="textinputbox" >
                    <div className="emaildiv" >
                    Learn more
                    </div>
                </div>
                <div className="row">
                    <div className="column signbutton">
                        <div className="sign">
                            <span className="emaildiv" onClick={this.signuppage} >Create account</span>
                        </div>
                        <Button variant="contained" color="primary" onClick = {this.next}>
                            Next  
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignInpage
