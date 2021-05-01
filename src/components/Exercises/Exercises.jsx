import React, { useEffect, useState } from 'react'
import 'fontsource-roboto'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import Card from '../Card/Card'

function Exercises() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/exercises/').then((res) => {
      setData(res.data)
    })
  }, [])
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6}>
        {data.map((row, index) => (
          <Card className="card" key={index} exercise={row} />
        ))}
      </Grid>
    </Grid>
  )
}

export default Exercises
