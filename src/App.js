import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "@/App.css";
import HomePage from "@views/HomePage/HomePage";
import LoginPage from "@views/LoginPage/LoginPage";
import { auth } from "@services/Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const isAuthenticated = false;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // Logged In
        console.log(userAuth);
      } else {
        // Log Out
      }

      return unsubscribe;
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              isAuthenticated ? <HomePage /> : <Navigate to="/auth/login" />
            }
          />
          <Route path="/auth/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
