import React from "react";
import "./ProfilePage.css";
import NavBar from "@components/layout/navigation/NavBar/NavBar";

function ProfilePage() {
  return (
    <div className="profileScreen">
      <NavBar />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
      </div>
    </div>
  );
}

export default ProfilePage;
