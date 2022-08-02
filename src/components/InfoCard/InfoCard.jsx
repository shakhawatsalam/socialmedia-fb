import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { useState} from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as UserApi from '../../api/UserRequest.js';
import { logOut } from "../../actions/AuthAction";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);
  console.log(user);
  useEffect(() => {
    const fetchProfileIdUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      }
      else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        
      }
    }
    fetchProfileIdUser();
  }, [user]);
  /// handle log out function
  const handleLogOut = () => {
    dispatch(logOut());
  }
  return (
    <div className='InfoCard'>
      <div className='infoHade'>
        <h4>Profile Info</h4>
        {user._id === profileUserId ? (<div>
          <UilPen
            width='2rem'
            height='1.2rem'
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            data = {user}
          />
        </div>) : ("")}
        
      </div>
      <div className='info'>
        <span>
          <b>Status: </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className='info'>
        <span>
          <b>Lives in: </b>
        </span>
        <span>{profileUser.livesin}</span>
      </div>
      <div className='info'>
        <span>
          <b>Works At: </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>

      <button className='button logout-button' onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default InfoCard;
