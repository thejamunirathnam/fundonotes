import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import PriorityIcon from '@material-ui/icons/PriorityHighOutlined'

import $ from "jquery";

import { Redirect } from "react-router-dom";
import Userservice from '../services/Userservice';
// import { DataUsageSharp } from '@material-ui/icons';
const axios_service = new Userservice();


const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

var dataa = {};

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            emailText: "You can use letters, numbers & periods",
            emaillabel: "Username",
            active: true,
            error: false,
            texttype: "password",
            fname: '',
            lname: '',
            email: '',
            pass: '',
            confpass: '',
            fnameError: '',
            lnameError: '',
            emailError: '',
            passError: '',
            confpassError: '',
            redirect: null,
            icon:'<PriorityIcon  fontSize="small"/>'
        }
    }
    

    emailchange = (e) => {
        var helpertext = this.state.active ? "You'll need to confirm that this email belongs to you." : "You can use letters, numbers & periods";
        var labeltext = this.state.active ? "Your email address" : "Username"
        var isactive = !this.state.active
        var cont = this.state.active ? "Create a new Gmail address intead" : "Use my current email address instead"
        $("#emaildiv").empty();
        $("#emaildiv").append(cont);
        $("#emailid").focus();
        this.setState({
            emailError: helpertext,
            emaillabel: labeltext,
            active: isactive,
            error: false
        })
    }


    signinpage = () => {
        this.setState({ redirect: "/Signin" });
    }

    change = e => {
        this.setState({
          [e.target.name]: e.target.value
        },()=>{
            // console.log(this.state);
        });
      }

    validate = () =>{
       
       let isError = false;
       const errors= this.state;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if((this.state.lname === '' && this.state.fname ==='')){
            errors.fnameError="Enter first & last name";
        }
        else if(this.state.fname ===''){
            errors.fnameError="Enter first name";
        }
        else if(this.state.lname ===''){
            errors.fnameError="Enter last name";
        }
        else{
            errors.fnameError='';
        }
        errors.lnameError= this.state.lname!='' ? "" : true;
        errors.emailError= this.state.email!='' ? (re.test(String(this.state.email).toLowerCase()) ? '':"Choose valid Gmail address"): "Choose valid Gmail address"
        errors.passError= this.state.pass!='' ? (this.state.confpass!='' ? '' : 'Confirm your password') : "Enter a password";
        // errors.confpassError= this.state.confpass!='' ? "" : true;

        if(this.state.pass!='' && this.state.confpass!=''){
        errors.passError = (this.state.pass!=this.state.confpass) ? "Those passwords didn’t match. Try again." : '';
        }
        dataa = {
            "firstName": this.state.fname,
            "lastName": this.state.lname,
            "email": this.state.email,
            "service": "advance",
            "password": this.state.pass
        }
        this.setState({
            ...errors,
            ...this.state
        })
        return isError = (errors.fnameError === '' && errors.lnameError === '' && errors.emailError === '' && errors.passError === '' && errors.confpassError=== '') ? true : false
       
    }  
    nextlevel = () =>{
        var err = this.validate();
        if(!err){
            console.log(err,this.state);
        }
        else{
             console.log("errorr",err,this.state,dataa);
             axios_service.Registration(dataa).then((result)=>{
               console.log(result);
               if(result.data.data.success){
                   console.log("*************sucessss*****************");
                   localStorage.setItem('user_details', result.data.data);
                   this.setState({ redirect: "/Dashboard" });
               }
             }).catch((error)=>{
                console.log(error);
             })
        }
    }
  

    next = () => {
        console.log("sucess");
        this.setState({
            fname: $("#fname").val() ? ($("#lname").val() ? false : "Enter last names") : "Enter first name",
            lname: $("#lname").val() ? false : "Enter last names",
            email: $("#emailid").val() ? false : "Choose a Gmail address",
            pass: $("#pass").val() ? false : "Enter a password",
            confpass: $("#confpass").val() ? false : " "
        }, () => {

            // console.log(this.props.Registration, this.props.message)

        })
    }

    render() {
       
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        // const { message, Registration } = this.props
        return (
            <div className="main">

                <div className="row">
                    <div className="column first" >
                        <div>
                            <p className="fundo">
                                <span style={{ color: 'blue' }}>F</span>
                                <span style={{ color: 'red' }}>u</span>
                                <span style={{ color: 'yellow' }}>n</span>
                                <span style={{ color: 'blue' }}>d</span>
                                <span style={{ color: 'green' }}>o</span>
                            </p>
                        </div>
                        <div className="spandiv">
                            <span className="spantable">Create your Google Account</span>
                        </div>
                        <div>
                            <div className="textinputbox">

                                <div className="textdiv">
                                    <TextField
                                        label="First name"
                                        name="fname"
                                        fullWidth
                                        error = {((this.state.fnameError!='') && (this.state.fname ==='')) ? true : false}
                                        // helperText={this.state.fname==='' ? (this.state.lname) (this.state.fnameError)}
                                        variant="outlined"
                                        id="fname"
                                        onChange={e => this.change(e)}
                                    />
                                </div>

                                <div className="textdiv">
                                    <TextField
                                        label="Last name"
                                        name="lname"
                                        fullWidth
                                        variant="outlined"
                                        error = {(this.state.lnameError != '') ? true : false}
                                        onChange={e => this.change(e)}
                                        id="lname"
                                    />
                                </div>
                            </div>

                            <div className="errordiv">
                            { this.state.fnameError!='' ? <div><PriorityIcon  fontSize="small"/> </div>:''}  
                              <span id="fnameerror">{this.state.fnameError}</span>
                            </div>


                            <div className="textinputbox">
                                <div className="textdiv">
                                    <TextField
                                        type="email"
                                        name="email"
                                        fullWidth
                                        label="Username"
                                        error = {(this.state.emailError!='') ? true : false}
                                        label={this.state.emaillabel}
                                        variant="outlined"
                                        id="emailid"
                                        onChange={e => this.change(e)}
                                    />
                                </div>
                            </div>
                            <div className="errordiv">
                            { this.state.emailError!='' ? <PriorityIcon  fontSize="small"/> :''}  
                              <span id="emailerror">{this.state.emailError!='' ? this.state.emailError: this.state.emailText}</span>
                            </div>

                            <div className="textinputbox" >
                                <div className="emaildiv" onClick={this.emailchange} id="emaildiv">
                                    Use my current email address instead
                                </div>
                            </div>
                            <div className="textinputbox">

                                <div className="textdiv">
                                    <TextField
                                        type={this.state.texttype}
                                        label="Password"
                                        id="pass"
                                        name="pass"
                                        fullWidth
                                        error = {(this.state.passError!='') ? true : false}
                                        error = {(this.state.passError!='') ? ((this.state.confpass!='') ? false :true ): false}
                                        variant="outlined"
                                        onChange={e => this.change(e)}
                                    />
                                </div>
                                <div className="textdiv">
                                    <TextField
                                        type={this.state.texttype}
                                        label="Confirm"
                                        name="confpass"
                                        fullWidth
                                        variant="outlined"
                                        error = {(this.state.passError!='') ? ((this.state.confpass!='') ? false :true ): false}
                                        id="confpass"
                                        onChange={e => this.change(e)}
                                    />
                                </div>

                            </div>
                            <div className="errordiv">   
                            { this.state.passError!='' ? <PriorityIcon  fontSize="small"/> :''}                         
                              <span id="fnameerror">{this.state.passError!='' ? this.state.passError: 'Use 8 or more characters with a mix of letters, numbers & symbols'}</span>
                            </div>
                            <div className="textinputbox">
                                <ThemeProvider theme={theme}>
                                    <FormGroup row >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="checkedB"
                                                    color="primary"
                                                    onChange={
                                                        e => {
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
                        </div>
                    </div>
                    <div className="column second">
                        <div className="imagediv">
                            <figure style={{ display: "contents" }}>
                                <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" width="244" height="244"  alt="Google image" />
                                <figcaption className="imagecaption">One account. All of Google working for you.</figcaption>
                            </figure>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column buttondiv">
                        <div className="sign">
                            <span className="emaildiv" onClick={this.signinpage}>Sign in instead</span>
                        </div>
                        {/* <Button variant="contained" color="primary" onClick={Registration} sdata={message}> */}
                        <Button variant="contained" color="primary" onClick={this.nextlevel}>

                            Next  
                        </Button>
                    </div>
                </div>
            </div>

        );
    }
}


export default Signup
