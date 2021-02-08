import React, { useState } from "react";
import { Button, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {useHistory} from 'react-router-dom'

export function LoginForm({accType,setLoggedIn}) {

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }));
  const classes = useStyles()
  const history = useHistory()

  // useStates
  const [email,setEmail] = useState('')
  const [password,setPassword]=useState('')

  // input handlers
  const handleEmail=e=>setEmail(e.target.value)
  const handlePassword=e=>setPassword(e.target.value)

  // form handler
  const handleSubmit = e => {
    e.preventDefault()
    
    if (accType==="student"){
      // login to student account
      axios({
        method: 'POST',
        url: 'https://aspire-api2021.herokuapp.com/api/v1/login/student',
        data:{
          email : email,
          password : password,
        }
      })
      .then(res=>{
          // log user in + redirect to homepage
          localStorage.setItem('jwt',res.data.token)
          localStorage.setItem('id', res.data.id)
          localStorage.setItem('accType',"student")
          setLoggedIn(true)
          history.push("/home")
        })
      .catch(err=>{
        console.error(err)
      })
    }
    else{
      //login to tutor account
      axios({
        method: 'POST',
        url:'https://aspire-api2021.herokuapp.com/api/v1/login/tutor',
        data:{
          email : email,
          password : password,
        }
      })
      .then(res=>{
        console.log(res)

        // log user in,set log in true, redirect to homepage
        localStorage.setItem('jwt',res.data.token)
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('accType',"tutor")

        setLoggedIn(true)
        
        // Load homepage
        history.push("/home")
      })
      .catch(err=>{console.log(err)})
    }
  };

  return (
    <div>
      <Paper elevation={0}  className={classes.root}>
        <Typography variant="h5" component="h3">
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            id="margin-normal"
            name="email"
            defaultValue={email}
            className={classes.textField}
            helperText="e.g. name@gmail.com"
            onChange={handleEmail}
          />

          <TextField
            label="Password"
            type="password"
            id="margin-normal"
            name="email"
            defaultValue={password}
            className={classes.textField}
            helperText="Enter password"
            onChange={handlePassword}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}
