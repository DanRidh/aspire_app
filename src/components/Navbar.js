import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import logo from "../images/logo.png";
import { useState } from "react";
import LoginModal from "../containers/LoginModal";

function Navbar({ loggedIn, setLoggedIn }) {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen);

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
              <LoginModal loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
