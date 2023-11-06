
import React from "react";
import GoogleSignin from "../img/WhatsApp Image 2023-11-04 at 11.56.27 PM.jpeg";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <ul>
        <li class="item"><a href="/home">Home</a></li>
        <li class="item"><a href="/chatbox">Chat Room</a></li>
        <li class="item"><a href="/dashboard">Dashboard</a></li>
        <li class="item"><a href="/sentiment">Sentiment Analysis</a></li>
        
      </ul>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
