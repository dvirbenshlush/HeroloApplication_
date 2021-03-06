import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styleSheet = makeStyles({
  flex: {
    display: 'flex',
  },
  space: {
    marginRight: 8,
  }

});

function WeatherDetails(props) {
  // const classes = props.classes;
  const classes = styleSheet();
  const result = props.data
  debugger
  const humidity = Math.round(result.humidity)
  const windSpeed = result.speed
  const windDegree = result.deg
  const cloudiness = Math.round(result.clouds)
  const pressure = Math.round(result.pressure)

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <Typography type="display1" className={classes.space} >
          Humidity:
        </Typography>
        <Typography type="display1">
          {`${humidity}%`}
        </Typography>
      </div>

      <div className={classes.flex}>
        <Typography type="display1" className={classes.space} >
          Wind:
        </Typography>
        <Typography type="display1"  >
          {`${windSpeed} m/s ${windDegree}°`}
        </Typography>
      </div>

      <div className={classes.flex}>
        <Typography type="display1" className={classes.space} >
          Cloudiness:
        </Typography>
        <Typography type="display1"  >
          {`${cloudiness} %`}
        </Typography>
      </div>
      <div className={classes.flex}>
        <Typography type="display1" className={classes.space} >
          Pressure:
        </Typography>
        <Typography type="display1"  >
          {`${pressure} hPa`}
        </Typography>
      </div>


    </div>
  );
}

WeatherDetails.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default WeatherDetails
