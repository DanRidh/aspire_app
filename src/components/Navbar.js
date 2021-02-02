import {Button, AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import {Menu, AccountCircle} from '@material-ui/icons';

function Navbar({loggedIn}) {


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

          {loggedIn
          ?
          <IconButton color='inherit' aria-label='account'>
            <AccountCircle/>
          </IconButton>
          :
            <>
              <Button color='inherit'>Login</Button>
              <Button href='' color='inherit' >Register</Button>
            </>
          }
        </Toolbar>
      </AppBar>
        
      </>
    )
  }

  export default Navbar;