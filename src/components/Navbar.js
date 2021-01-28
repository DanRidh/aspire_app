import {Button, AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import {Menu, AccountCircle} from '@material-ui/icons';

function Navbar() {
    return (
      <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge='start' aria-label= 'menu'>
            <Menu/>            
          </IconButton>
          <Typography variant='h6' style={{flexGrow:1}}>
            Aspire
          </Typography>
          <Button color='inherit'>
            Login
          </Button>
          <Button color='inherit'>
            Register
          </Button>
          <IconButton color='inherit' aria-label='account'>
            <AccountCircle/>
          </IconButton>
        </Toolbar>
        
      </AppBar>
        
      </>
    );
  }

  export default Navbar;