import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Button
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import logo from "../images/logo.png";
import LoginModal from "../containers/LoginModal";
import {Link} from 'react-router-dom'
import Logout from "../containers/Logout";

function Navbar({ loggedIn, setLoggedIn }) {
  const useStyles = makeStyles(()=>({
    link:{
      textDecoration:'none',
      color:'inherit'
    }
  }))
  const classes = useStyles()

  const accType = localStorage.getItem("accType")

  return (
    <>
      <AppBar
        position="static"
        style={{
          color: "#0ac5a8",
          backgroundColor: "black",
          position: "fixed",
          top: "0",
        }}
      >
        <Toolbar>
          <Link to="/">
            <img
              src={logo}
              alt="aspire_logo"
              className={classes.link}
              style={{
                height: "50px",
                width: "70px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            />
          </Link>

          <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>


          {loggedIn ? (
            <>
              <Link style={{marginRight:'20px'}} to="/home" className={classes.link}>
                <Typography>Home</Typography>
              </Link>
              {accType==="tutor"
              ? <Button color='inherit'>Create a new class</Button>
              : null
              }
              <Logout setLoggedIn={setLoggedIn}/>

                <IconButton color="inherit" aria-label="account">
                  <AccountCircle />
                </IconButton>
              </>
              ) : (
                <>
                  <LoginModal loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
