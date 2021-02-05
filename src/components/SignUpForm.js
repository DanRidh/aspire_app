import React, { useState } from "react";
import { Button, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Checkboxes from "./Checkboxes";

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

  // form input states
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isFemale, setIsFemale] = useState(false)


  const handleSubmit=(e)=>{
    e.prevent.default()
  }



  return (
    <div>
      <Paper elevation={0}>
        <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
        <Typography component="p">{props.formDescription}</Typography>

        <form onSubmit={handleSubmit}>
          <TextField 
            label="First Name"
            id="margin-normal" 
            name="first_name" 
            defaultValue={firstName}
            className={classes.textField}
            helperText="e.g. David"
            onChange={handleInput}
          />
          <TextField
            label="Last Name"
            id="margin-normal"
            name="last_name"
            defaultValue={lastName}
            className={classes.textField}
            helperText="e.g. McGyver"
            onChange={handleInput}
          />
          <TextField
            id="age"
            name="age"
            label="Age"
            type="number"
            defaultValue={age}
            className={classes.textField}
          />
          <TextField
            label="Email"
            id="margin-normal"
            name="email"
            defaultValue={email}
            className={classes.textField}
            helperText="e.g. name@gmail.com"
            onChange={handleInput}
          />
          <TextField
            label="Password"
            type="password"
            id="margin-normal"
            name="email"
            defaultValue={password}
            className={classes.textField}
            helperText="Enter password"
            onChange={handleInput}
          />
          <Checkboxes />
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}
