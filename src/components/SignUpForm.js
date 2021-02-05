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
  const [fNameError, setFNameError]=useState(false)
  const [lNameError, setLNameError]=useState(false)
  const [ageError, setAgeError]=useState(false)
  const [emailError, setEmailError]=useState(false)
  const [passwordError, setPasswordError]=useState(false)

  const [fNameHelper, setFNameHelper]=useState(false)
  const [lNameHelper, setLNameHelper]=useState(false)
  const [ageHelper, setAgeHelper]=useState(false)
  const [emailHelper, setEmailHelper]=useState(false)
  const [passwordHelper, setPasswordHelper]=useState(false)

  // input handlers
  const handleFirstName=e=>{
    var fName = e.target.value
    setFirstName(fName)
    
    if (!validateName(fName)){

    }

    
  }
  const handleLastName=e=>{setLastName(e.target.value)}
  const handleEmail=e=>{setEmail(e.target.value)}
  const handlePassword=e=>{setPassword(e.target.value)}

  // event handler
  const handleSubmit=(e)=>{
    e.prevent.default()
    // make api call to create new user if validations ok
  }

  // Input validations
  // firstName & lastName
  const validateName=(name)=>{

    if (!name.length){
      return true
    } 
    if (name.length<6){
      return false
    }
    
  }

  // age < 150


  // email
  // must be email format

  // password  
  // - uppercase, lowercase, special_char and number
  // - min 6 characters

 


  console.log("isFemale?", isFemale)

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
            error={fNameError}
            label="First Name"
            id="margin-normal" 
            name="first_name" 
            defaultValue={firstName}
            className={classes.textField}
            helperText="e.g. David"
            onChange={handleFirstName}
          />
          <FormHelperText>{fNameHelper}</FormHelperText>

          <TextField
            required
            error={lNameError}
            label="Last Name"
            id="margin-normal"
            name="last_name"
            defaultValue={lastName}
            className={classes.textField}
            helperText="e.g. McGyver"
            onChange={handleLastName}
          />
          <FormHelperText>{lNameHelper}</FormHelperText>

          <TextField
            required
            error={ageError}
            id="age"
            name="age"
            label="Age"
            type="number"
            defaultValue={age}
            className={classes.textField}
          />
          <FormHelperText>{ageHelper}</FormHelperText>

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
          <FormHelperText>{emailHelper}</FormHelperText>

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
          <FormHelperText>{passwordHelper}</FormHelperText>

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
