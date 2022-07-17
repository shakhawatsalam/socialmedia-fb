import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";

const InfoCard = () => {
  return (
    <div className='InfoCard'>
      <div className='infoHade'>
        <h4>Your Info</h4>
        <div>
          <UilPen width='2rem' height='1.2rem' />
        </div>
      </div>
      <div className='info'>
        <span>
          <b>Status: </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className='info'>
        <span>
          <b>Lives in: </b>
        </span>
        <span>Chittagong</span>
      </div>
      <div className='info'>
        <span>
          <b>Works At: </b>
        </span>
        <span>Programming Hero</span>
      </div>

      <button className='button logout-button'>Log Out</button>
    </div>
  );
};

export default InfoCard;
