import React, {useState, useEffect } from "react";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css';


const GetCity = async(city)=>{
    const [res, setRes] = useState("");
    useEffect(()=>{
    const req = async()=>{
    const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
    const key = 'e6kVJBAVrQaGIUBeWDpt6zThbzwaMCTz';
    const query = `?apikey=${key}&q=${city}`
    const response = await fetch(base+query);
    const {data} = await response.json();
    setRes(data[0])
    }
    req();
    },[]);
    return (
        <div>
          <h1>A user</h1>
          <p>{res}</p>
        </div>
      );

  } 
  
  
  
//   getCity(`tel-aviv`).then(data=>console.log(data)).catch(err=>console.log(err))


export default GetCity;
  