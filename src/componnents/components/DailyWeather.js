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
  // debugger
  const result = props.data
  const date = new Date(result.Date)
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let weatherIcon = result.Day.Icon
  // const maxTemp = Math.round(result.temp.max)
  // const minTemp = Math.round(result.temp.min)
  let { Maximum, Minimum } = result.Temperature //Math.round(result.temp.day)
  // debugger
  Maximum = Math.round(parseFloat(Maximum.Value))
  Minimum = Math.round(parseFloat(Minimum.Value))

  // switch (weather) {
  //   case 'Thunderstorm':
  //     weatherIcon = thunderstorm
  //     break
  //   case 'Drizzle':
  //     weatherIcon = drizzle
  //     break
  //   case 'Rain':
  //     weatherIcon = rain
  //     break
  //   case 'Snow':
  //     weatherIcon = snow
  //     break
  //   case 'Atmosphere':
  //     weatherIcon = atmosphere
  //     break
  //   case 'Clear':
  //     weatherIcon = clear
  //     break
  //   case 'Clouds':
  //     weatherIcon = clouds
  //     break
  //   case 'Extreme':
  //     weatherIcon = extreme
  //     break
  //   default:
  //     weatherIcon = defaultIcon
  // }
  let day = weekday[date.getDay()]
  // debugger
  return (
    <div>
      <center>
        <Typography type="display1">
          {day}
        </Typography>
        <img src={`/img/weather-icons/${weatherIcon}-s.png`} alt="WeatherIcon" height="64" width="64" />
        <Typography type="subheading" >
          {`${Maximum}° ${Minimum}°`}
        </Typography>
      </center>
    </div>
  )
}
export default withStyles(styleSheet)(DailyWeather)
