import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import logo from "../images/logo.png";

function Navbar({ loggedIn }) {
  return (
    <>
      <AppBar
        position="static"
        style={{
          color: "#0ac5a8",
          backgroundColor: "black",
          position: "fixed",
        }}
      >
        <Toolbar>
          <img
            src={logo}
            style={{
              height: "50px",
              width: "70px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          ></img>

          <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>

          {loggedIn ? (
            <IconButton color="inherit" aria-label="account">
              <AccountCircle />
            </IconButton>
          ) : (
            <>
              <Button color="inherit">Login</Button>
              <Button href="" color="inherit">
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
