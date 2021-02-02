

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
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                            be{bull}nev{bull}o{bull}lent
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
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