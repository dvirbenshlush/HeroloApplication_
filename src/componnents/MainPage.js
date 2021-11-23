import React, { useEffect, useState } from "react";
import DailyForecasts from "../componnents/DailyForecasts.js";
import firebase from "../../src/util/firebase.js";
import 'firebase/storage'
import Button from '@mui/material/Button';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import firebase from 'firebase/compat';
import WeatherCard from "../componnents/components/WeatherCard"
const MainPage = (props) => {



    const [city, setCity] = useState('Holon');
    // const [keyOfCity, setKeyOfCity] = useState([{ id: '', name: '' }]);
    const [submit, setSubmit] = useState(false);
    const [corrunt, setCorrunt] = useState('');
    const [loading, setloading] = useState(true);
    const [weather, setweather] = useState([])
    const [DailyForecasts, setDailyForecasts] = useState([])
    const [Key, setKey] = useState("")
    // const [favorite, setFavorite] = useState('');
    // var a = JSON.stringify({})
    // const signOut = () => {
    //     firebase.auth().signOut();
    // }

    useEffect(() => {
        getCity(city)
    }, [submit])

    const getCity = (city) => {
        const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
        const key = '5gvp2hv5z2C5gZCi7Bpx1KhxIxajXJXj';
        const query = `?apikey=${key}&q=${city}`
        fetch(base + query).then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then(function (param) {
            console.log(param)
            // setweather(param)
            // setloading(false)
            return param[0]
        })
            .then((dataParam) => {
                setCity(dataParam.LocalizedName)
                // debugger
                setKey(dataParam.Key)
                setweather(dataParam)
                get5Days(dataParam.Key)
                getCurrentConditions(dataParam.Key)

            })
    }



    const corruntWeather = { city, corrunt }

    const saveToFirebase = () => {
        const dbRef = firebase.database().ref('WeatherDB')
        dbRef.push(corruntWeather);
    }



    const get5Days = (id) => {
        const base = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/`;
        const key = '5gvp2hv5z2C5gZCi7Bpx1KhxIxajXJXj';
        const query = `${id}?apikey=${key}`
        fetch(base + query).then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then(function (param) {
            // var arr = [];
            // var temp;
            // for (var i = 0; i < param.DailyForecasts.length; i++) {
            //     arr.push({ id: param.DailyForecasts[i].Temperature.Minimum.Value, name: param.DailyForecasts[i].Day.PrecipitationType })
            // }
            // setKeyOfCity(arr)
            // debugger
            setDailyForecasts(param.DailyForecasts)
            console.log(param)

            // console.log('print of submit')
            // return param.Headline.EffectiveDate
        })
    }




    function getCurrentConditions(id) {

        const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
        const key = '5gvp2hv5z2C5gZCi7Bpx1KhxIxajXJXj';
        const query = `${id}?apikey=${key}`
        fetch(base + query).then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then(function (param) {
            var arr = [];
            var temp;

            setCorrunt(param[0].Temperature.Metric.Value)
            setloading(false)
            return param
        })
    }




    const submitValue = () => {

        if (submit)
            setSubmit(false)
        else
            setSubmit(true)
    }
    // debugger
    return (


        <div>
            <Container>
                <div>
                    {
                        (DailyForecasts.length > 0)
                            ? <WeatherCard DailyForecasts={DailyForecasts} weather={weather} wKey={Key} />
                            : <p>Loading . . . </p>
                    }
                </div>
                {/* 
                <input type="text" onChange={e => setCity(e.target.value)} />
                <h1>{city}</h1>
                <h1>{corrunt}</h1>
                <button onClick={submitValue}>Submit</button>
                <Button onClick={saveToFirebase}>save</Button>
                <br />
                <br />
                <br />
                <br />
                {keyOfCity.map((home, key) => <DailyForecasts temp={home} key={key} />)} */}


            </Container>
        </div>
    );
};

export default MainPage;