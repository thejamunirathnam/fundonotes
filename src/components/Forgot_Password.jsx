import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";
import Userservice from '../services/Userservice';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { ThemeProvider } from '@material-ui/styles';
const axios_service = new Userservice();


export class SignInpage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        redirect: null,
        texttype:'password'
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
      forgotpassword = () => {
        this.setState({ redirect: "/forgotpassword" });
      }
    next = () =>{

        // let dataa = {
        //     email: this.state.email,
        // }
        let dataa = {
            email: 'thejasre@gmail.com',
        }
        axios_service.ForgotPassword(dataa).then((result)=>{
            console.log(result);
            if(result.status==200){
                console.log("*************Forgot mail sent sucessss*****************");
            }
          }).catch((error)=>{
             console.log(error);
          })
       
        // this.setState({ redirect: "/" });
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
                    <span className="signin">Account recovery</span>
                </div>
               
                <div className="row">
                <div>
                            <figure className="emailfigure">
                                <img src="https://ssl.gstatic.com/accounts/account-recovery-email-pin.gif" height="150px"  alt="Google image" />
                            </figure>
                            <div  className="learn verification">Get a verification code</div>
                            <div className="learn">Google will send a verification code to the•••••••••••••••••@gmail.com</div>
                        </div>
                </div>
               
                <div className="row">
                    <div className="column signbutton">
                        <div className="sign">
                            <span className="emaildiv" onClick={this.forgotpassword}>Try another way</span>
                        </div>
                        <Button variant="contained" color="primary" onClick = {this.next}>
                            Send  
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignInpage
