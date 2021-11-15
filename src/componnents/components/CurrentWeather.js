import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import thunderstorm from '../../assets/images/Thunderstorm.png'
import drizzle from '../../assets/images/Drizzle.png'
import rain from '../../assets/images/Rain.png'
import snow from '../../assets/images/Snow.png'
import atmosphere from '../../assets/images/Atmosphere.png'
import clear from '../../assets/images/Clear.png'
import clouds from '../../assets/images/Cloudy.png'
import extreme from '../../assets/images/Extreme.png'
import defaultIcon from '../../assets/images/Partly-cloudy.png'




const styleSheet = makeStyles({
  flex: {
    display: 'flex',
  },
  root: {
    marginRight: 32,
  },
});
function CurrentWeather(props) {
  const classes = props.classes
  const result = props.data

  var weather = result.weather[0].main
  let weatherIcon

  switch (weather) {
    case 'Thunderstorm':
      weatherIcon = thunderstorm
      break
    case 'Drizzle':
      weatherIcon = drizzle
      break
    case 'Rain':
      weatherIcon = rain
      break
    case 'Snow':
      weatherIcon = snow
      break
    case 'Atmosphere':
      weatherIcon = atmosphere
      break
    case 'Clear':
      weatherIcon = clear
      break
    case 'Clouds':
      weatherIcon = clouds
      break
    case 'Extreme':
      weatherIcon = extreme
      break
    default:
      weatherIcon = defaultIcon
  }

  const currentTemp = Math.round(result.temp.day)

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <img src={`${weatherIcon}`} alt="WeatherIcon" />
        <Typography type="display4"  >
          {`${currentTemp}°`}
        </Typography>
      </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(CurrentWeather)
