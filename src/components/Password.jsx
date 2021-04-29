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


// const aunthetication = {
//     isLoggedin: false,
//     onAuthentication () {
//       this.isLoggedin = true;
//     },
//     getLogedinStatus () {
//       return this.isLoggedin
//     }
//  }
 
 //create a component as secured route
//  function securedRoute(props){
//     return (
//      <Route path={props.path}
//      render= { data=>aunthetication.getLogedinStatus() ? (<props.component {...data} />) : (<Redirect to={{pathname:'/'}} />) } >
//      </Route>
//     )
//  }
 


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
        //     password: this.state.password
        // }
        let dataa = {
            email: 'thejasre@gmail.com',
            password: 'theja'
        }
        axios_service.Login(dataa).then((result)=>{
            console.log(result);
            if(result.status==200){
                console.log("*************Login sucessss*****************");
                localStorage.setItem('fname', result.data.firstName);
                localStorage.setItem('lname', result.data.lastName);
                localStorage.setItem('email', result.data.email);
                localStorage.setItem('id', result.data.id);
                localStorage.setItem('userId', result.data.userId);
                // aunthetication.onAuthentication();
                this.setState({ redirect: "/Dashboard" });
            }
          }).catch((error)=>{
             console.log(error);
          })
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
                    <span className="signin">Welcome</span>
                </div>
                <div className="row">
                    <span className="learn fphone">To continue, first verify it’s you</span>
                </div>
                <div className="signtextbox">
                    <div className="textdiv">
                        <TextField
                            type={this.state.texttype}
                            fullWidth
                            label="Enter your password"
                            variant="outlined"
                            id="password"
                            name="password"
                            onChange = {this.change}
                        />
                    </div>
                </div>
                <div className="textinputbox">
                                <ThemeProvider>
                                    <FormGroup row >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="checkedB"
                                                    color="primary"
                                                    onChange={
                                                        e => {
                                                            console.log(e.target.checked)
                                                            var checktype = e.target.checked ? "text" : "password";
                                                            this.setState({
                                                                texttype: checktype
                                                            })
                                                        }
                                                    }
                                                />
                                            }
                                            label="Show password"
                                        />

                                    </FormGroup>
                                </ThemeProvider>

                            </div>
               
               
                <div className="row">
                    <div className="column signbutton">
                        <div className="sign">
                            <span className="emaildiv" onClick={this.forgotpassword}>Forgot Password</span>
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
