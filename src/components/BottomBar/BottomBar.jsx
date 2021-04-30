import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Link } from 'react-router-dom'

function BottomBar(props) {
  const value = ''
  return (
    <div>
      <BottomNavigation
        style={{ width: '100%', position: 'fixed', bottom: '0' }}
        value={value}
        onChange={(event, newValue) => {
          props.setActualPage(newValue)
        }}
        showLabels
        className="stickToBottom"
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          value="Home"
          label="Home"
        />
        <BottomNavigationAction
          component={Link}
          to="/exercises"
          value="Exercises"
          label="Exercises"
        />
        <BottomNavigationAction
          component={Link}
          to="/createuser"
          value="Create User"
          label="Create User"
        />
        <BottomNavigationAction
          component={Link}
          to="/createexercise"
          value="Create Exercise"
          label="Create Exercise"
        />
      </BottomNavigation>
    </div>
  )
}

export default BottomBar
