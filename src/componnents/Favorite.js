// import { Favorite } from "@mui/icons-material";
import React, { useEffect, useState,useCallback, useMemo } from "react";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css';
import SingleDayForFavorieCountry from "./SingleDayForFavorieCountry.js";
import firebase from "../util/firebase.js";



const Favorite = (props)=>{
    // console.log(JSON.stringify(localStorage.getItem('favorites')))
      const [listOfCities,setListOfCities] = useState()
      
      useEffect(()=>{
      const WeatherDB =  firebase.database().ref('WeatherDB');
      WeatherDB.on("value",snapshot=>{
        const country = snapshot.val();
        const listOfCities=[];
        for(let id in country){
          listOfCities.push(country[id])
        }
        // console.log(listOfCities)
        setListOfCities(listOfCities)
      })
     },[])
    // listOfCities.forEach(e=>console.log(JSON.parse(e)+' inner'))
      
    return (
        <div>
          {/* <ul> */}
          {
          listOfCities ? listOfCities.map((child,key)=><SingleDayForFavorieCountry temp={child} key={key}/>) : ''
          }
              {/* </ul>       */}
        </div>
      );

  } 
  
  
  


export default Favorite;
  