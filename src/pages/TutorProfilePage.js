import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const TutorProfilePage =()=>{

    return (
        <div>
            <div>
                <img src="" class=""/> profile photo
                <p>tutor username</p>
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