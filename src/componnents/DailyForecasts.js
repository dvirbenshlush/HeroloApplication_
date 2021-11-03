import React,{useState,useEffect} from "react";
// import FavoriteIcon from '@mui/icons-material';

 const DailyForecasts = (props)=> {

    const [onSave,setOnSave] = useState('canada');


    // console.log('props from init component')
    // console.log(props.temp)
     return(
         <div className={'DailyForecasts-container'}>
             <h3>{props.temp.id}</h3>
             <br/>
             <h3>{props.temp.name}</h3>
             {/* {FavoriteIcon} */}
             {/* <button onClick={saveAsAFavorite}>save</button> */}

         </div>
     )
 }

 export default DailyForecasts;