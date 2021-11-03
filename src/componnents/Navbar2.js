import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "../../src/util/firebase.js";



const Navbar2= (props)=>{
  const signOut = ()=>{
    firebase.auth().signOut();
  }
if(props.mode==true)
return(
    <>
  <Navbar bg="light" variant="light">
  <Container>
    <Navbar.Brand href="#MainPage">Herolo Application</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/MainPage">Home</Nav.Link>
      <Nav.Link href="/Favorite">Favorite</Nav.Link>
      <Nav.Link onClick={signOut}>Sign out</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
)
else
return(
  <>
<Navbar bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >Herolo Application</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/MainPage">Home</Nav.Link>
    <Nav.Link href="/Favorite">Favorite</Nav.Link>
    <Nav.Link onClick={signOut}>Sign out</Nav.Link>
  </Nav>
  </Container>
</Navbar>
</>
)
}

export default Navbar2;