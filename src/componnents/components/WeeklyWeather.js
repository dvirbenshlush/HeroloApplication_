import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DailyWeather from './DailyWeather'

const styleSheet = makeStyles(theme => ({
  daily: {
    justifyContent: "space-between",
    display: "flex",
    marginRight: 32
  }
}))

function WeeklyWeather(props) {
  const classes = styleSheet();
  // const classes = props.classes;
  // debugger
  const result = props.data
  let days
  result.shift()

  days = result.map(day =>
    <DailyWeather data={day} key={day.Date} />
  )

  return (
    <ul className={classes.daily}>
      {days}
    </ul>
  )
}

export default WeeklyWeather;
