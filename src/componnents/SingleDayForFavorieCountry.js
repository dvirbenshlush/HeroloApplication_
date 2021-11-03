import React,{useState,useEffect} from "react";

 const SigleDayForFavoriteCountry = (props)=> {

     return(
         <div className={'DailyForecasts-container'}>
             <h3>{props.temp.city}</h3>
             <br/>
             <h3>{props.temp.corrunt}</h3>

         </div>
     )
 }

 export default SigleDayForFavoriteCountry;