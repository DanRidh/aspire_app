import React, { useState } from "react";
import { Button, TextField, Paper, Typography, Container, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from './RadioGroup'

export function SignUpForm(props) {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    textField: {
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
      width: 400,
    },
    helperText:{
      textAlign:'center'
    }
  }));
  
  const classes = useStyles()

  // form input states
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isFemale, setIsFemale] = useState(false)

// input validation helper texts and error states
  // const [fNameError, setFNameError]=useState(false)
  // const [lNameError, setLNameError]=useState(false)
  const [ageError, setAgeError]=useState(false)
  const [emailError, setEmailError]=useState(false)
  const [passwordError, setPasswordError]=useState(false)

  const [fNameHelper, setFNameHelper]=useState(false)
  const [lNameHelper, setLNameHelper]=useState(false)
  const [ageHelper, setAgeHelper]=useState(false)
  const [emailHelper, setEmailHelper]=useState(false)
  const [passwordHelper, setPasswordHelper]=useState(false)

  // input handlers
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

  // form event handler
  const handleSubmit=(e)=>{
    e.prevent.default()
    // make api call to create new user if validations ok
  }

  // Input validations
  // first name and last name validation handled by textField 'required' state.
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

  // password  
  // - uppercase, lowercase, special_char and number
  // - min 6 characters
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

  console.log(password)



  return (
    <div>
      <Paper elevation={0}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
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
          <FormHelperText className={classes.helperText}>{fNameHelper}</FormHelperText>

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
          <FormHelperText className={classes.helperText}>{lNameHelper}</FormHelperText>

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
            <RadioGroup setIsFemale={setIsFemale} />
          </Container>
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}
