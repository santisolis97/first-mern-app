import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75vw',
    border: '0.3px solid #b0bec5',
    marginBottom: '25px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function RecipeReviewCard(props) {
  function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1)

    return capitalized
  }
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.exercise.username.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={capitalizeFirstLetter(props.exercise.description)}
        subheader={props.exercise.date}
      />
      <CardMedia
        className={classes.media}
        image={props.exercise.photo}
        title={props.exercise.description}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Username: {capitalizeFirstLetter(props.exercise.username)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Duration: {props.exercise.duration}
        </Typography>
      </CardContent>
    </Card>
  )
}
