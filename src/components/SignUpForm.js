import React, { useReducer } from "react";
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

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: "",
    }
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let data = { formInput };

    fetch("https://pointy-gauge.glitch.me/api/form", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => console.log("Success:", JSON.stringify(response)))
      .catch((error) => console.error("Error:", error));
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const classes = useStyles();

  console.log(props);

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
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="e.g. David"
            onChange={handleInput}
          />
          <TextField
            label="Last Name"
            id="margin-normal"
            name="last_name"
            defaultValue={formInput.name}
            className={classes.textField}
            helperText="e.g. McGyver"
            onChange={handleInput}
          />
          <TextField
            id="age"
            name="age"
            label="Age"
            type="number"
            className={classes.textField}
          />
          <TextField
            label="Email"
            id="margin-normal"
            name="email"
            defaultValue={formInput.email}
            className={classes.textField}
            helperText="e.g. name@gmail.com"
            onChange={handleInput}
          />
          <TextField
            label="Password"
            type="password"
            id="margin-normal"
            name="email"
            defaultValue={formInput.password}
            className={classes.textField}
            helperText="Enter password"
            onChange={handleInput}
          />
          <Checkboxes />
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
