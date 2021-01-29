import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



export default function Checkboxes() {
    const [checked, setChecked] = React.useState(false);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return(
      <div>
        <FormControlLabel
        control={<Checkbox color="primary" />}
        
        onChange={handleChange}
        label="Male"
        labelPlacement="end"
        />
        <FormControlLabel
        control={<Checkbox color="primary" />}
        
        onChange={handleChange}
        label="Female"
        labelPlacement="end"
        />
      </div>
    )
  }
    
  