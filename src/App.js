import React, { useReducer, useEffect, useState, createContext, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './contexs/provider';
// import { Navbar } from 'react-bootstrap';
import { changeMode } from './actions';



function Notfound(props) {
  return <div id="defaultRouteDiv">
    <h1>404 - Page not found</h1>
  </div>;
}
export const UserContext = React.createContext(null);

const App = (props) => {
  // const DarkMode =false;
  const DarkMode = useSelector(state => state.isDark)

  useEffect(() => {
    console.log('redux result is ' + DarkMode)
  }, [DarkMode])


  const dispatch = useDispatch();

  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  const [isDark, setIsDark] = useState(false);
  // const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  // useEffect(() => {
  //   isDarkFunction()
  // }, [])

  // const isDarkFunction = () => {
  //   if (isDark === true)
  //     setIsDark(false)
  //   else
  //     setIsDark(true)
  // }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true)
    }
    setIsUserSignedIn(false)
  })

  return (
    // <UserProvider>


    <div>
      {/* <div class="p-3 mb-2 bg-dark text-white"> */}
      <Router>
        {/* <UserProvider> */}
        <UserContext.Provider value={[isDark, setIsDark]}>
          {isUserSignedIn && <Navbar2
            mode={DarkMode}
          // isDarkFunction={isDarkFunction}
          />}
        </UserContext.Provider>
        <Switch>
          {isUserSignedIn === true
            ? <>
              <Route exact path="/" component={MainPage} >
                {/* <Navbar2
                // mode={isDark} 
                // isDarkFunction={isDarkFunction} 
                /> */}
                {/* <MainPage /> */}
              </Route>
              {/* <Route exact path="/MainPage">
                <Navbar2 mode={isDark} />
                <MainPage />
              </Route> */}
              <Route exact path="/Favorite">
                {/* <Navbar2
                // mode={isDark} isDarkFunction={isDarkFunction} 
                /> */}
                <Favorite />
              </Route>
              <Route path="*" >
                {/* <Notfound /> */}
              </Route>
            </> : <>
              <Route exact path="/" component={SignIn}></Route>
              <Route path="*">
                <div id="defaultRouteDiv">
                  <h1>you must sign in</h1>
                </div>
              </Route>
            </>
          }
        </Switch>
        {/* </UserProvider> */}
      </Router>
      <button onClick={() => dispatch(changeMode())}>changeMode</button>
      {/* <div>
        <div class="custom-control custom-switch">
          <input onClick={isDarkFunction} type="checkbox" class="custom-control-input" id="customSwitch1" />
          <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
        </div>
      </div> */}

    </div>
    // </UserProvider>
    // :
    // <div>
    //   <Router>
    //     <Switch>
    //       <Route exact path="/" component={SignIn}></Route>
    //       <Route path="*">
    //         <div id="defaultRouteDiv">
    //           <h1>you must sign in</h1>
    //         </div>
    //       </Route>
    //     </Switch>
    //   </Router>
    // </div>



  )

}


export default App;