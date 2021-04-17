import React from "react";
import "./Login.css";

// {
//   "name": "discord",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@material-ui/core": "^4.11.3",
//     "@material-ui/icons": "^4.11.2",
//     "@reduxjs/toolkit": "^1.5.0",
//     "@testing-library/jest-dom": "^4.2.4",
//     "@testing-library/react": "^9.5.0",
//     "@testing-library/user-event": "^7.2.1",
//     "firebase": "^8.3.1",
//     "react": "^17.0.2",
//     "react-dom": "^17.0.2",
//     "react-redux": "^7.2.3",
//     "react-scripts": "4.0.3"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": "react-app"
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }

//? Icons
import { Button } from "@material-ui/core";

//? Firebase
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.arstechnica.net/wp-content/uploads/2017/08/Discord-LogoWordmark-Color.png"
          alt="Discord LOGO"
        />
      </div>

      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;
