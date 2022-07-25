import React, { useRef, useState } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  console.log(image);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

      setImage(img);
    }
  };

  //handleSubmit button function
  
  return (
    <div className='PostShare'>
      <img src={ProfileImage} alt='' />
      <div>
        <input type='text' placeholder="What's on your mind" />
        <div className='postOption'>
          <div
            className='option'
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className='option' style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className='option' style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className='option' style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className='button ps_button' onClick={handleSubmit}>Share</button>
          <div style={{ display: "none" }}>
            <input
              type='file'
              name='myImage'
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className='previewImage'>
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt='' />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
