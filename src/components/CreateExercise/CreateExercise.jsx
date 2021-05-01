import React, { useState, useEffect } from 'react'
import 'fontsource-roboto'
import {
  Button,
  Container,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Input,
  Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'
import 'date-fns'
import axios from 'axios'
import { storage } from '../../firebase/firebase.config'
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
  const classes = useStyles()
  const [users, setUsers] = useState([])
  const [exercise, setExercise] = useState({
    username: '',
    description: '',
    duration: 0,
    date: null,
    photo: '',
  })

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'http://localhost:5000/users',
      headers: {},
    }

    axios(config)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const saveExercise = (urlImage) => {
    let data = JSON.stringify({
      username: exercise.username,
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date,
      photo: urlImage,
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

  function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1)

    return capitalized
  }

  const handleSubmit = (event) => {
    storage
      .ref('images')
      .child(exercise.photo.name)
      .getDownloadURL()
      .then((url) => {
        console.log(url)
        saveExercise(url)
      })
  }
  const handleStorage = (event) => {
    event.preventDefault()
    storage
      .ref(`images/${exercise.photo.name}`)
      .put(exercise.photo)
      .then(function (snapshot) {
        handleSubmit()
      })
  }
  const handleChange = (event) => {
    if (event.target.name === 'photo') {
      setExercise({ ...exercise, [event.target.name]: event.target.files[0] })
    } else {
      setExercise({ ...exercise, [event.target.name]: event.target.value })
    }
  }
  const handleDateChange = (date) => {
    setExercise({ ...exercise, date: date })
  }
  return (
    <div>
      <form
        className={classes.root}
        onSubmit={handleStorage}
        noValidate
        autoComplete="off"
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <FormControl>
              <InputLabel>Username</InputLabel>
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
                      {capitalizeFirstLetter(user.username)}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Description"
              name="description"
              value={exercise.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Duration"
              name="duration"
              type="number"
              value={exercise.duratin}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                placeholder="DD/MM/YYYY"
                format={'dd/MM/yyyy'}
                value={exercise.date}
                name="date"
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item>
            <Input
              type="file"
              className="form-control"
              id="photo"
              name="photo"
              onChange={handleChange}
            />
          </Grid>
          <br />
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Create Exercise
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default CreateExercise
