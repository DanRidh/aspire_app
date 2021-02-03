import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';

const TutorProfilePage =()=>{

    let id = useParams().id
    const jwt = localStorage.getItem("jwt")

    const [age, updateAge] = useState(0)
    const [email, updateEmail] = useState("")
    const [firstName, updateFirstName] = useState("")
    const [lastName, updateLastName] = useState("")
    const [isFemale, updateIsFemale] = useState(false)
    const [profilePhoto, updateProfilePhoto] = useState("")
    const [rating, updateRating] = useState(5)
    const [username, updateUsername] = useState("")

    // Retrieve tutor
    useEffect( ()=>{
        axios.get(`https://aspire-api2021.herokuapp.com/tutors/${id}`)
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

    return (
        <div>
            <div>
                <img src="" class=""/> profile photo
                <p>{username}</p>
            </div>
            <div>
                <h2>tutor's classes</h2>
                <div>
                    <h3>List of classes conducted by tutor </h3>
                    <Card  variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                test text
                            </Typography>
                            <Typography color="textSecondary">
                            adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default TutorProfilePage