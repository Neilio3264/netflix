import React from "react";
import "./ProfilePage.css";
import avatar from "@assets/Netflix_avatar.png";
import NavBar from "@components/layout/navigation/NavBar/NavBar";
import Plans from "@components/descriptions/plans/Plans/Plans";
import { useSelector } from "react-redux";
import { selectUser } from "@store/features/user/userSlice";
import { auth } from "@services/Firebase/firebase";
import { signOut } from "firebase/auth";

function ProfilePage() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <NavBar />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={avatar} alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <Plans />
              <button
                onClick={() =>
                  signOut(auth)
                    .then(() => {
                      // Sign-out Successful
                    })
                    .catch((error) => {
                      // An error happened
                      alert(error.message);
                    })
                }
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
