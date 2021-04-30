import React, { useState, useEffect } from 'react'
import 'fontsource-roboto'
import {
  Button,
  Container,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  FormControl,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import 'date-fns'
import axios from 'axios'

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))
function CreateExercise() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'http://localhost:5000/users',
      headers: {},
    }

    axios(config)
      .then((response) => {
        setUsers(response.data)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const saveExercise = () => {
    let data = JSON.stringify({
      username: exercise.username,
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date,
    })
    let config = {
      method: 'post',
      url: 'http://localhost:5000/exercises/add',
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

  const [exercise, setExercise] = useState({
    username: '',
    description: '',
    duration: 0,
    date: null,
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(exercise)
    saveExercise()
  }
  const handleChange = (event) => {
    setExercise({ ...exercise, [event.target.name]: event.target.value })
  }
  const handleDateChange = (date) => {
    setExercise({ ...exercise, date: date })
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
          <FormControl>
            <InputLabel htmlFor="age-simple">Username</InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={exercise.username}
              onChange={handleChange}
              name="username"
            >
              {users &&
                users.map((user, index) => (
                  <MenuItem key={index} value={user.username}>
                    {user.username}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            id="standard-basic"
            label="Description"
            name="description"
            value={exercise.description}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Duration"
            name="duration"
            type="number"
            value={exercise.duratin}
            onChange={handleChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              placeholder="MM/DD/YYYY"
              format={'MM/dd/yyyy'}
              value={exercise.date}
              name="date"
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>

          <br />
          <Button type="submit" variant="contained" color="primary">
            Create Exercise
          </Button>
        </form>
      </Container>
    </div>
  )
}

export default CreateExercise
