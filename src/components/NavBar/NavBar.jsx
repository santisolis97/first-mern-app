import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function NavBar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar align="center" variant="regular">
          <Typography variant="h6" color="inherit">
            {props.actualPage}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
