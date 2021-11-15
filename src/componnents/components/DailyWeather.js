import React from 'react';
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

});

function DailyWeather(props) {
  const result = props.data
  const date = new Date(result.dt * 1000)
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weather = result.weather[0].main
  let weatherIcon
  const maxTemp = Math.round(result.temp.max)
  const minTemp = Math.round(result.temp.min)


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


  return (
    <div>
      <center>
        <Typography type="display1">
          {weekday[date.getDay()]}
        </Typography>
        <img src={`${weatherIcon}`} alt="WeatherIcon" height="64" width="64" />
        <Typography type="subheading" >
          {`${maxTemp}° ${minTemp}°`}
        </Typography>
      </center>
    </div>
  )
}
export default withStyles(styleSheet)(DailyWeather)
