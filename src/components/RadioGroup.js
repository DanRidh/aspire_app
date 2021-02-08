import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup({setIsFemale,isFemale}) {
    const [value, setValue] = React.useState('female');

    const handleChange = (e) => {
    setValue(e.target.value);
    };

    // leaving setISFemale outside of handleChange
    // because value is not rendered until end of event handler
    if (value ==="female"){
        setIsFemale(true)
    } 
    else{
        setIsFemale(false)
    }



  return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
        </FormControl>
  );
}