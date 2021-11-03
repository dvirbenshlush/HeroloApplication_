import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
// import SignUp from './components/SignUp.component'
// import About from './components/About.component'
// import Home from './components/Home.component'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import firebase from 'firebase/compat';
import MainPage from './componnents/MainPage';
import Navbar2 from './componnents/Navbar2';
import Favorite from './componnents/Favorite';
import SignIn from './componnents/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from 'react-bootstrap';







const App= (props)=> {

 const [isUserSignedIn,setIsUserSignedIn] = useState(true);
 const [isDark,setIsDark] = useState(false);

//  useEffect(()=>{
//   isDarkFunction()
//  },[isDark])

const isDarkFunction = ()=>{
  if(isDark==true)
  setIsDark(false)
  else
  setIsDark(true)
}

 firebase.auth().onAuthStateChanged((user)=>{
   if(user){
   return setIsUserSignedIn(true)
   }
   setIsUserSignedIn(false)
 })

 if(isUserSignedIn===true){
  return (
    <div>
    {/* <div class="p-3 mb-2 bg-dark text-white"> */}
      <Router>
        <Switch>
          <Route exact path="/">
          <Navbar2 mode={isDark}/>
            <MainPage/>
          </Route>
          <Route exact path="/mainpage">
            <Navbar2 mode={isDark}/>
            <MainPage/>
          </Route>
          <Route exact path="/Favorite">
            <Navbar2 mode={isDark}/>
            <Favorite/>
          </Route> 
          <Route path="*">
            <div id="defaultRouteDiv">
              <h1>404 - Page not found</h1>
            </div>
          </Route>
        </Switch>
      </Router>
      
      <div>
        <div class="custom-control custom-switch">
          <input onClick={isDarkFunction} type="checkbox" class="custom-control-input" id="customSwitch1"/>
          <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
        </div>
      </div>
      
   </div>
  );
}
else{
  return (
    <div>
       <Router>
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <Route path="*">
            <div id="defaultRouteDiv">
              <h1>you must sign in</h1>
            </div>
          </Route>
        </Switch>
       </Router>
    </div>
  )
}

}

export default App;