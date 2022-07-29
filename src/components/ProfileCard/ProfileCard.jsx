import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='ProfileCard'>
      <div className='ProfileImages'>
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt=''
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt=''
        />
      </div>
      <div className='ProfileName'>
        <span>
          {user.firstname} {user.lastname}
        </span>
        <span>{user.wokksAt ? user.worksAt : "write about yourself"}</span>
      </div>

      {/* follows and following  */}
      <div className='followStatus'>
        <hr />
        <div>
          <div className='follow'>
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className='vl'></div>
          <div className='follow'>
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className='vl'></div>
              <div className='follow'>
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/profile/${user._id}`}>
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
