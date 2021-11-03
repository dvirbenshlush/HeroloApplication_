import React, { useEffect } from 'react';
import firebase from 'firebase/compat';
import Button from 'react-bootstrap/Button';

const SignIn = ()=>{
    const signInWithFirebase = ()=>{
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then((re)=>{
          console.log(re)
          console.log(re)
        }).catch((err)=>{
          console.log(err)
        })
      }

      return (
         <Button onClick={signInWithFirebase}>Sign in with google</Button>
      )
}
export default SignIn