import React, {useState} from 'react'
import {Button, Modal, Paper, Typography,makeStyles} from '@material-ui/core'

import {SignUpForm} from '../components/SignUpForm'
import {LoginForm} from '../components/LoginForm'

const useStyles = makeStyles(() => ({
    paper:{
        margin:"auto",
        marginTop:"50px",
        width:"50vw",
        height:"15vh",
        display:"block",
        padding:"30px",
        textAlign:"center",
    },
    button:{
        margin:"5px",
    },

}))

let LoginModal=({ loggedIn ,setLoggedIn})=>{
    const classes = useStyles()

    // Modal States
    const [openRegisterSignUp,setOpenRegisterSignUp]=useState(false)
    const [openStudentTutor, setOpenStudentTutor] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)
    const [openSignIn, setOpenSignIn] = useState(false)

    // Close Modals
    const handleCloseRegisterSignUp=()=>{setOpenRegisterSignUp(false)}
    const handleCloseStudentTutor=()=>{setOpenStudentTutor(false)}
    const handleCloseRegister=()=>{setOpenRegister(false)}
    const handleCloseSignIn=()=>{setOpenSignIn(false)}
    

    // Other states - register/sign up, student/tutor
    const [register, setRegister] = useState(true)
    const [accType, setAccType] = useState('student')

    // Open first modal - register / sign up
    const handleRegisterSignUp=()=>{setOpenRegisterSignUp(true)}

    // sets register state + open student/tutor modal
    const handleRegister=()=>{
        setRegister(true)
        setOpenStudentTutor(true)
    }
    const handleSignIn=()=>{
        setRegister(false)
        setOpenStudentTutor(true)
    }

    // displays register modal / sign in modal
    const handleForm=()=>{
        if (register){
            setOpenRegister(true)
        } else{
            setOpenSignIn(true)
        }
    }
    
    const handleStudent=()=>{
        setAccType('student')
        handleForm()
        }
    
    const handleTutor=()=>{
        setAccType('tutor')
        handleForm()
    }

    
    console.log("register? ", register)
    console.log("accType: ",accType)

    return(
        <>
            <Button className={classes.button} variant="contained" color="secondary" onClick={handleRegisterSignUp}>Register / Sign In</Button>

            <Modal 
            id="register-sign-in"
            aria-labelledby="register-sign-in"
            open={openRegisterSignUp} 
            onClose={handleCloseRegisterSignUp}
            >
                <Paper className={classes.paper}>
                    <Typography variant="h6">Would would you like to do?</Typography>
                    <br/>
                    <Button onClick={handleSignIn} className={classes.button} variant="contained" color="primary">Sign in</Button>
                    <Button onClick={handleRegister} className={classes.button} variant="contained" color="secondary">Register</Button>
                </Paper>
            </Modal>

            <Modal 
            id="student-tutor"
            aria-labelledby="student-tutor"
            open={openStudentTutor}
            onClose={handleCloseStudentTutor}
                >
                <Paper className={classes.paper}>
                    <Typography variant="h6">Which account would you like to sign up for?</Typography>
                    <br/>
                    <Button onClick={handleStudent} className={classes.button} variant="contained" color="primary">Student</Button>
                    <Button onClick={handleTutor} className={classes.button} variant="contained" color="secondary">Tutor</Button>
                </Paper>
            </Modal>

            <Modal 
            id="register"
            aria-labelledby="register"
            open={openRegister}
            onClose={handleCloseRegister}
            >
                <Paper className={classes.paper}>
                    <Typography variant="h6">Register a {accType} account.</Typography>
                    <SignUpForm />
                </Paper>

            </Modal>

            <Modal 
            id="sign-in"
            aria-labelledby="sign-in"
            open={openSignIn}
            onClose={handleCloseSignIn}
            >
                <Paper className={classes.paper}>
                    <Typography variant="h6">Sign in to your {accType} account.</Typography>
                    <LoginForm/>
                </Paper>
            </Modal>
        </>
    )

}

export default LoginModal