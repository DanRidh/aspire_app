import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Ratings from "./Ratings";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        marginleft: "20px",
        justifyContent: "space-around",
      }}
    >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="tutor" className={classes.avatar}>
              W
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Warren Buffet"
          subheader="Finance"
        />
        <CardMedia className={classes.media} image="images/WB.jpeg" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            The only guru you'll need
          </Typography>
          <Ratings />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Qualification:</Typography>
            <Typography paragraph>
              10 years of experience in memes sharing.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              W
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Warren Buffet"
          subheader="Finance"
        />
        <CardMedia className={classes.media} image="WB.jpeg" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            The only guru you'll need
          </Typography>
          <Ratings />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Qualification:</Typography>
            <Typography paragraph>
              10 years of experience in memes sharing.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              W
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Warren Buffet"
          subheader="Finance"
        />
        <CardMedia className={classes.media} image="WB.jpeg" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            The only guru you'll need
          </Typography>
          <Ratings />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Qualification:</Typography>
            <Typography paragraph>
              10 years of experience in memes sharing.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              W
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Warren Buffet"
          subheader="Finance"
        />
        <CardMedia className={classes.media} image="WB.jpeg" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            The only guru you'll need
          </Typography>
          <Ratings />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Qualification:</Typography>
            <Typography paragraph>
              10 years of experience in memes sharing.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
