import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Link } from 'react-router-dom'

function BottomBar(props) {
  const value = ''
  return (
    <div>
      <BottomNavigation
        style={{
          width: '100%',
          position: 'fixed',
          bottom: '0',
          boxShadow: ' 3px 3px red, -0em 0 0.2em #6e6a6a',
          backgroundColor: '#3f51b5',
        }}
        value={value}
        onChange={(event, newValue) => {
          props.setActualPage(newValue)
        }}
        showLabels
        className="stickToBottom"
      >
        {/* <BottomNavigationAction
          style={{
            color: 'white',
          }}
          component={Link}
          to="/"
          value="Home"
          label="Home"
        /> */}
        <BottomNavigationAction
          component={Link}
          style={{
            color: 'white',
          }}
          to="/exercises"
          value="Exercises"
          label="Exercises"
        />
        <BottomNavigationAction
          component={Link}
          style={{
            color: 'white',
          }}
          to="/createuser"
          value="Create User"
          label="Create User"
        />
        <BottomNavigationAction
          component={Link}
          style={{
            color: 'white',
          }}
          to="/createexercise"
          value="Create Exercise"
          label="Create Exercise"
        />
      </BottomNavigation>
    </div>
  )
}

export default BottomBar
