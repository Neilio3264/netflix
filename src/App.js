import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "@/App.css";
import HomePage from "@views/HomePage/HomePage";
import LoginPage from "@views/LoginPage/LoginPage";

function App() {
  const isAuthenticated = false;

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
