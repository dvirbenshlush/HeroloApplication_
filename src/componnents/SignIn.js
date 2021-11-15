import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat';
import CustomInput from "./ui/CustomInput";
import Button from "./ui/Button";

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signInWithFirebase = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(google_provider)
      .then((re) => {
        console.log(re)
        console.log(re)
      }).catch((err) => {
        console.log(err)
      })
  }



  // const handleChange = e => {
  //   setState({ [e.currentTarget.id]: e.currentTarget.value });
  // };


  return (
    <div className="App">
      <form className="form border col-5 form m-auto">
        <CustomInput
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          handleChange={setEmail}
          type="text"
          value={email}
        />
        <CustomInput
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true
          }}
          handleChange={setPassword}
          type="password"
          value={password}
        />


        <Button type="button" color="primary" className="form__custom-button" onClick={signInWithFirebase}>Sign in with google</Button>
      </form>
    </div >
  );

}
export default SignIn