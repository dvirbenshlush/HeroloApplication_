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
  const classes = props.classes;
  const result = props.data
  let days
  result.shift()

  days = result.map(day =>
    <DailyWeather data={day} key={day.dt} />
  )

  return (
    <ul className={classes.daily}>
      {days}
    </ul>
  )
}

export default withStyles(styleSheet)(WeeklyWeather);
