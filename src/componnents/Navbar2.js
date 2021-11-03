import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "../../src/util/firebase.js";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import React, { useEffect, useState, useContext, useReducer } from 'react';
import { ThemeContext } from './../contexs/provider';
import { UserContext } from './../App';
const Navbar2 = (props, value) => {

  const signOut = () => {
    firebase.auth().signOut();
  }

  // const [state, dispatch] = useContext(ThemeContext)
  const [state, setIsDark] = useContext(UserContext);

  debugger
  if (state === true) {


    return (
      <>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">Herolo Application</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Favorite">Favorite</Nav.Link>
              <Nav.Link onClick={signOut}>Sign out</Nav.Link>
            </Nav>
            <BootstrapSwitchButton onChange={() => setIsDark(!state) /*dispatch({ type: "toggle_button" })*/} checked={state} onstyle="dark" />
          </Container>
        </Navbar>
      </>
    )
  }
  else
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand >Herolo Application</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Favorite">Favorite</Nav.Link>
              <Nav.Link onClick={signOut}>Sign out</Nav.Link>
            </Nav>
            <BootstrapSwitchButton onChange={() => setIsDark(!state) /*dispatch({ type: "toggle_button" })*/} checked={state} onstyle="dark" />
          </Container>
        </Navbar>
      </>
    )
}

export default Navbar2;