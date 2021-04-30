import React, { useEffect, useState } from 'react'
import 'fontsource-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})
function capitalizeFirstLetter(str) {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1)

  return capitalized
}
function Exercises() {
  const [data, setData] = useState([])
  const classes = useStyles()
  useEffect(() => {
    axios.get('http://localhost:5000/exercises/').then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Username</b>
              </TableCell>
              <TableCell align="right">
                <b>Description</b>
              </TableCell>
              <TableCell align="right">
                <b>Duration</b>
              </TableCell>
              <TableCell align="right">
                <b>Date</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {capitalizeFirstLetter(row.username)}
                </TableCell>
                <TableCell align="right">
                  {capitalizeFirstLetter(row.description)}
                </TableCell>
                <TableCell align="right">{row.duration}</TableCell>
                <TableCell align="right">
                  {capitalizeFirstLetter(row.date)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Exercises
