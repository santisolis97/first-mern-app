import React, { useState } from 'react'
import 'fontsource-roboto'
import { TextField, Container, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

function CreateUser() {
  const saveUser = () => {
    let data = JSON.stringify({ username: username })
    let config = {
      method: 'post',
      url: 'http://localhost:5000/users/add',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const classes = useStyles()
  const [username, setUsername] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    saveUser()
  }
  const handleChange = (event) => {
    setUsername(event.target.value)
  }
  return (
    <div>
      <Container>
        <form
          className={classes.root}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Create user
          </Button>
        </form>
      </Container>
    </div>
  )
}

export default CreateUser
