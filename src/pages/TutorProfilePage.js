import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';

const TutorProfilePage =()=>{

    let tutor_id = useParams().id
    const jwt = localStorage.getItem("jwt")

    const [age, updateAge] = useState(0)
    const [email, updateEmail] = useState("")
    const [firstName, updateFirstName] = useState("")
    const [lastName, updateLastName] = useState("")
    const [isFemale, updateIsFemale] = useState(false)
    const [profilePhoto, updateProfilePhoto] = useState("")
    const [rating, updateRating] = useState(5)
    const [username, updateUsername] = useState("")

    const [classList, updateClassList] = useState([])

    // Retrieve tutor
    useEffect(()=>{
        axios.get(`https://aspire-api2021.herokuapp.com/tutors/${tutor_id}`)
        .then(res=>{
            updateAge(res.age)
            updateEmail(res.email)
            updateFirstName(res.first_name)
            updateLastName(res.last_name)
            updateIsFemale (res.is_female)
            updateProfilePhoto(res.profile_image)
            updateRating(res.rating)
            updateUsername(res.username)
        })

    },[])

    // Retrieve tutor's classes
    // WIP - pending API for retrieving tutor_sessions based on tutor_id
    useEffect(()=>{
        axios.get(`https://aspire-api2021.herokuapp.com/api/v1/tutor_sessions/${tutor_id}`)
        .then(res=>{

        })
    },[])

    return (
        <Container>
            <Container>
                <Avatar alt={`${firstName} ${lastName}`} src={profilePhoto} />
                <Box fontSize="h3.fontSize" >{firstName} {lastName}</Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={value} readOnly />
                    <Typography component="legend">{rating}/5.0</Typography>
                </Box>
                <Box>Age : {age} </Box>
                <Box>Gender : {isFemale? "Female":"Male"}</Box>

                <Box fontSize="h6.fontSize" fontStyle="italic">@{username}</Box>
                <Box>{email}</Box>
            </Container>
            <Container>
                <Box fontSize="h3.fontSize" fontStyle="fontWeightMedium">Join one of {firstName}'s upcoming classes!</Box>

                <Container display="flex" flexWrap="wrap">
                {/* For each class in tutor_session, display:*/}
                {/* class placeholder image */}
                {/* class title, links to viewClass page*/}
                {/* class subject, optional: link to search page for this subject */}
                {/* tutor profile pic */}
                {/* tutor full name, linke to tutor profile page */}
                {/* date */}
                {/* number of seats left */}
                {/* join button */}
                {/* share button, links to viewClass page */}

                    {/* WIP */}
                    <Card username={username} profilePhoto={profilePhoto} />
                    
                {/* End loop */}
                </Container>
            </Container>
        </Container>
    )
}

export default TutorProfilePage