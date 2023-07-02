import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "@/App.css";
import HomePage from "@views/HomePage/HomePage";
import LoginPage from "@views/LoginPage/LoginPage";
import ProfilePage from "@views/ProfilePage/ProfilePage";
import { auth } from "@services/Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "@store/features/user/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Log Out
        dispatch(logout);
      }

      return unsubscribe;
    });
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={!user ? <Navigate to="/auth/login" /> : <HomePage />}
          />
          <Route
            path="/auth/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
