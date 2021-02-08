import { Button, makeStyles } from '@material-ui/core'
import React from 'react'

const Logout=({setLoggedIn})=>{
    const useStyles = makeStyles(()=>({
        button:{
            marginLeft:'15px',
            marginRight: '15px'
        }
    }))

    const classes = useStyles()
    const handleClick=()=>{
        localStorage.removeItem('jwt')
        localStorage.removeItem('id')
        localStorage.removeItem('accType')

        setLoggedIn(false)
    }

    return(
        <Button 
        onClick={handleClick} 
        color="inherit" 
        className= {classes.button}
        >
            Logout
        </Button>
    )
}

export default Logout