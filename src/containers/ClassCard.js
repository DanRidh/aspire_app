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
import { Avatar, Button,Divider } from "@material-ui/core";
import StripeButton from "../components/StripeButton";
import axios from "axios";

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
  cardItemMargin:{
    marginBottom:10,
    marginTop:10
  }
}));

export default function ClassCard({c}) {
  // const classes = useStyles({ profilePhoto, username });
  const classes = useStyles();

  let start = c.start_time.toString()
  let end = c.end_time.toString()

  const startDay = start.substring(0,3)
  const startDate = start.substring(5,16)
  const startTime = start.substring(17,22)

  const endDay = end.substring(0,3)
  const endDate = end.substring(5,16)
  const endTime = end.substring(17,22)

  let price = c.price
  price = parseFloat(price)

  const handleUnenroll=()=>{
    // console.log(c)
    // console.log(c.id)

    axios({
      method:'POST',
      url:'https://aspire-api2021.herokuapp.com/api/v1/student_tutor_sessions/unenroll',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      date:{
        tutor_session_id: c.id
      }
    })
    .then(res=>{
      console.log(res)
      alert(`Successfully unenrolled from ${c.title}`)
    })
    .catch(err=>console.error(err))
    
  }

  console.log(c)

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
        <Typography className={classes.cardItemMargin}>Category: {c.subject.category}</Typography>
        <Typography className={classes.cardItemMargin} variant="body2" color="textSecondary" component="p">
          {c.description}
        </Typography>
        <Divider className={classes.cardItemMargin}/>
        {(startDate===endDate)
          ? 
          <>
            <Typography>{startDay}, {startDate} </Typography>
            <Typography>{startTime} - {endTime}</Typography>
          </>
          : 
          <>
            <Typography>{startDay}, {startDate}, {startTime} - </Typography>
            <Typography>{endDay},{endDate}, {endTime}</Typography>
          </>
        }
        <Divider className={classes.cardItemMargin}/>
        <Typography variant="h6" className={classes.cardItemMargin}>Price: RM {price}</Typography>
        <Divider className={classes.cardItemMargin}/>
      </CardContent>
      <CardActions>
        <StripeButton c={c}>Pay</StripeButton>
        <Button onClick={handleUnenroll}>Unenroll</Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
