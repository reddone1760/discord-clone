import React, { useEffect } from "react";
import "./App.css";

//? Components
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";

//? Redux
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./app/features/userSlice";

//? Firebase
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
