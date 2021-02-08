import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import image from "../images/card-image.jpg";
import { Avatar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    minHeight:450,
    margin:10
    
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ClassCard({c}) {
  // const classes = useStyles({ profilePhoto, username });
  const classes = useStyles();

  // TO FIX: Timezone in UTC+00:00
  // to change to GMT+08:00
  const start = new Date(c.start_time)
  const startDate= start.toLocaleDateString('en-MY',{timeZone:'Asia/Singapore'})
  const startTime = start.toLocaleTimeString('en-MY',{timeZone:'Asia/Singapore'})
  console.log(startTime)

  const end = new Date (c.end_time)
  const endDate = end.toLocaleDateString()
  const endTime = end.toLocaleTimeString()
  console.log(startTime)

  return (
    <Card className={classes.root}>

      <CardHeader
        avatar = {
          <Avatar src={c.tutor.profile_image}></Avatar>
        }
        title={`${c.title}`}
        subheader={`by ${c.tutor.first_name} ${c.tutor.last_name}`}
      />
        <CardMedia
          className={classes.media}
          image={image}
          title= {c.title}
          style={{ marginTop: "20px" }}
        />
      <CardContent>
        <Typography>Category: {c.subject.category}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {c.description}
        </Typography>
        <Typography>Start: {startDate} {startTime}</Typography>
        <Typography>End: {endDate} {endTime}</Typography>
        
        
      </CardContent>
      <CardActions>
        <Button>Enroll</Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
