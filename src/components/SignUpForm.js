import axios from "axios";
import RadioGroup from './RadioGroup'
import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Paper, Typography, Container, FormHelperText } from "@material-ui/core";

import {Redirect} from 'react-router-dom'

export function SignUpForm({accType,setLoggedIn}) {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    textField: {
      width: 400,
    },
    helperText:{
      textAlign:'center'
    }
  }));
  
  const classes = useStyles()
  const history=useHistory()

  // -------------- form input states --------------
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isFemale, setIsFemale] = useState(true)

// ----- states for errors & helper texts for input validations -----
  const [ageError, setAgeError]=useState(false)
  const [emailError, setEmailError]=useState(false)
  const [passwordError, setPasswordError]=useState(false)

  const [ageHelper, setAgeHelper]=useState(false)
  const [emailHelper, setEmailHelper]=useState(false)
  const [passwordHelper, setPasswordHelper]=useState(false)

  // ------------------- onChange input handlers -------------------
  const handleFirstName=e=>{setFirstName(e.target.value)}

  const handleLastName=e=>{setLastName(e.target.value)}

  const handleAge=e=>{
    setAge(e.target.value)
    validateAge(e.target.value)
  }

  const handleEmail=e=>{
    setEmail(e.target.value)
    validateEmail(e.target.value)
  }

  const handlePassword=e=>{
    setPassword(e.target.value)
    validatePw(e.target.value)
  }

  // -------------------onSubmit form event handler -------------------
  const handleSubmit=()=>{
    console.log('user details: ',firstName,lastName,email,password,age,isFemale)
    console.log(ageError,emailError,passwordError)
    console.log('user details: ',firstName,lastName,email,password,age,isFemale)
    console.log(accType)

    // if no errors in validation
    if (!ageError && !emailError && !passwordError){
      console.log(accType)
      if (accType==="student"){
        // create student account
        axios({
          method: 'POST',
          url: 'https://aspire-api2021.herokuapp.com/api/v1/students/',
          data:{
            first_name: firstName,
            last_name : lastName,
            email : email,
            password : password,
            age : age,
            is_female :isFemale,
          }
        })
        .then(res=>{
            console.log(res)

            // log user in,set log in true, close modal
            localStorage.setItem('jwt',res.data.token)
            localStorage.setItem('id', res.data.student.id)
            localStorage.setItem('accType',"student")

            setLoggedIn(true)
            
            // Load homepage
            history.push("/home")

          })
        .catch(err=>console.group(err))
      }

      else{
        //create tutor account
        axios({
          method: 'POST',
          url:'https://aspire-api2021.herokuapp.com/api/v1/tutors/',
          data:{
            first_name: firstName,
            last_name : lastName,
            email : email,
            password : password,
            age : age,
            is_female :isFemale
          }
        })
        .then(res=>{
          console.log(res)
          history.push("/home")

        })
        .catch(err=>{console.log(err)})
        }
    }
  }
  

  // ----------------------- Input validations -----------------------
  // age
  const validateAge=(age)=>{
    if (age<1){
      setAgeError(true)
      setAgeHelper("Age cannot be zero.")
      return true
    } 

    if (age>150){
      setAgeError(true)
      setAgeHelper("You're more than 150 years old? You can hold a Guiness World Record!")
      return true
    }
    else {
      setAgeError(false)
      setAgeHelper("")
      return false
    }
  }

  // email
  const validateEmail=(email)=>{
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!email.match(mailformat))
    {
      setEmailError(true)
      setEmailHelper('Email address format is invalid.')
    } else{
      setEmailError(false)
      setEmailHelper('')

    }
  }

  // password  - uppercase, lowercase, special_char and number & min 6 characters
  const validatePw=pw=>{
    const pwformat= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

    // const lower = pw.search('[a-z]') 
    // const upper = pw.match(/^[A-Z]/)
    // const num = pw.match(/^[0-9]/)
    // const special_char=pw.match(/[~`!@#$%^&*()_+-=}{\[\]}<>,.?]/)


    if (pw.length<6){
      setPasswordError(true)
      setPasswordHelper("Password requirements: min. 6 letters, ")
    } else if ( !pw.match(pwformat)){
      setPasswordError(true)
      setPasswordHelper("1 uppercase, 1 lowercase, and 1 special character")
    } else{
      setPasswordError(false)
      setPasswordHelper("")
    }

  }


  return (
    <div>
      <Paper elevation={0}>
        <form >
          <TextField 
            required
            label="First Name"
            id="margin-normal" 
            name="first_name" 
            defaultValue={firstName}
            className={classes.textField}
            helperText="e.g. David"
            onChange={handleFirstName}
          />

          <TextField
            required
            label="Last Name"
            id="margin-normal"
            name="last_name"
            defaultValue={lastName}
            className={classes.textField}
            helperText="e.g. McGyver"
            onChange={handleLastName}
          />

          <TextField
            required
            error={ageError}
            id="age"
            name="age"
            label="Age"
            type="number"
            defaultValue={age}
            onChange={handleAge}
            className={classes.textField}
          />
          <FormHelperText className={classes.helperText}>{ageHelper}</FormHelperText>

          <TextField
            required
            error={emailError}
            label="Email"
            id="margin-normal"
            name="email"
            defaultValue={email}
            className={classes.textField}
            helperText="e.g. name@gmail.com"
            onChange={handleEmail}
          />
          <FormHelperText className={classes.helperText}>{emailHelper}</FormHelperText>

          <TextField
            required
            error={passwordError}
            label="Password"
            type="password"
            id="margin-normal"
            name="email"
            defaultValue={password}
            className={classes.textField}
            helperText="Enter password"
            onChange={handlePassword}
          />
          <FormHelperText className={classes.helperText}>{passwordHelper}</FormHelperText>

          <Container>
            <RadioGroup setIsFemale={setIsFemale} isFemale={isFemale} />
          </Container>
          <Button onClick={handleSubmit} variant="contained" color="primary" className={classes.button}>
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}
