import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText'

export default function RadioButtonsGroup({setIsFemale}) {
  const [value, setValue] = React.useState('female');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const handleChange = (e) => {
    setValue(e.target.value);

    if (value ==="female"){
        setIsFemale(true)
    } else{
        setIsFemale(false)
    }

    if (!value){
        setError(true)
        setHelperText("Please choose one.")
    }

  };

  return (
        <FormControl error={error} component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormHelperText>{helperText}</FormHelperText>
            </RadioGroup>
        </FormControl>
  );
}