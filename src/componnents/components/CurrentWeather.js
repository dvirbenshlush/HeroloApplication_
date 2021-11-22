import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { IconButton, Icon } from '@material-ui/core';
import { Star } from '@material-ui/icons';

// import IconButton from '@mui/material/IconButton';
// import thunderstorm from '../../assets/images/Thunderstorm.png'
// import drizzle from '../../assets/images/Drizzle.png'
// import rain from '../../assets/images/Rain.png'
// import snow from '../../assets/images/Snow.png'
// import atmosphere from '../../assets/images/Atmosphere.png'
// import clear from '../../assets/images/Clear.png'
// import clouds from '../../assets/images/Cloudy.png'
// import extreme from '../../assets/images/Extreme.png'
// import defaultIcon from '../../assets/images/Partly-cloudy.png'




const styleSheet = makeStyles({
  flex: {
    display: 'flex',
  },
  root: {
    marginRight: 32,
  },
});
function CurrentWeather(props) {
  // debugger
  const classes = props.classes
  const result = props.data
  const wKey = props.wKey
  // var weatherText = result.Day.IconPhrase
  let weatherIcon = result.Day.Icon


  // const chooseWeatherImage = (weatherText) => {
  // let weatherTextLowerCase = 'cloudy'

  // if (weatherText) {
  //   weatherTextLowerCase = weatherText.toLowerCase()
  // }

  // switch (weatherTextLowerCase) {
  //   case 'sunny':
  //   case 'hot':
  //   case 'mostly sunny':
  //   case 'partly sunny':
  //   case 'intermittent clouds':
  //     weatherIcon = 'sunny-day'
  //     break
  //   case 'hazy sunshine':
  //   case 'windy':
  //     weatherIcon = 'hazy-day'
  //     break
  //   case 'light fog':
  //   case 'fog':
  //     weatherIcon = 'fog-day'
  //     break
  //   case 'cloudy':
  //   case 'mostly cloudy':
  //   case 'overcast':
  //   case 'some clouds':
  //   case 'partly sunny w/ flurries':
  //     weatherIcon = 'cloudy-day'
  //     break
  //   case 'dreary (overcast)':
  //   case 'mostly cloudy w/ flurries':
  //   case 'flurries':
  //     weatherIcon = 'dreary-day'
  //     break
  //   case 'showers':
  //   case 'a shower':
  //   case 'cold':
  //   case 'ice':
  //   case 'sleet':
  //   case 'mostly cloudy w/ showers':
  //   case 'partly sunny w/ showers':
  //   case 'light rain':
  //     weatherIcon = 'cloudy-with-showers-day'
  //     break
  //   case 'mostly cloudy w/ t-storms':
  //   case 'partly sunny w/ t-storms':
  //   case 't-storms':
  //   case 'mostly cloudy w/ snow':
  //   case 'snow':
  //   case 'thunderstorms':
  //   case 'rain and snow':
  //     weatherIcon = 'storm-day'
  //     break
  //   case 'rain':
  //   case 'freezing rain':
  //     weatherIcon = 'rain-day'
  //     break
  //   case 'clear':
  //   case 'mostly clear':
  //     weatherIcon = 'clear-sky-night'
  //     break
  //   case 'partly cloudy':
  //   case 'partly cloudy w/ showers':
  //     weatherIcon = 'cloudy-night'
  //     break
  //   case 'hazy moonlight':
  //     weatherIcon = 'hazy-night'
  //     break
  //   case 'partly cloudy w/ t-storms':
  //     weatherIcon = 'rain-night'
  //     break
  //   default:
  //     weatherIcon = 'sunny-day'
  // }
  // }





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




  let { Maximum, Minimum } = result.Temperature //Math.round(result.temp.day)
  // debugger
  Maximum = Math.round(parseFloat(Maximum.Value))
  Minimum = Math.round(parseFloat(Minimum.Value))


  // let Favorites = JSON.parse(localStorage.getItem('Favorites')) || [];
  // const isFav = Favorites.includes(wKey)
  const saveToF = () => {
    debugger
    let Favorites = JSON.parse(localStorage.getItem('Favorites')) || []
    const isFav = Favorites.includes(wKey)
    if (isFav) {
      if (window.confirm("alrady exsist are u sure u want to remove from favorite")) {
        Favorites.splice(Favorites.indexOf(wKey), 1)
      }
    } else {
      Favorites.push(wKey);
    }
    localStorage.setItem('Favorites', JSON.stringify(Favorites));

  }
  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <img src={`/img/weather-icons/${weatherIcon}-s.png`} alt="WeatherIcon" />
        <Typography type="display4"  >
          {`Minimum :  ${Minimum}°`}
        </Typography>
        <Typography type="display4"  >
          {`Maximum :  ${Maximum}°`}
        </Typography>
        <IconButton onClick={saveToF} colorSecondary style={{ color: "blue" }}>
          <Star></Star>
        </IconButton>
      </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(CurrentWeather)
