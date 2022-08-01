import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  // handle change function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  // handle change Image 
  const onImageChange = (e) => {

  }

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}>
      <form className='infoForm'>
        <h3>Your Info</h3>

        <div>
          <input
            type='text'
            className='infoInput'
            name='firstname'
            placeholder='First Name'
            onChange={handleChange}
            value={formData.firstname}
          />
          <input
            type='text'
            className='infoInput'
            name='lastName'
            placeholder='Last Name'
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>
        <div>
          <input
            type='text'
            className='infoInput'
            name='worksAt'
            placeholder='Works at'
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>
        <div>
          <input
            type='text'
            className='infoInput'
            name='livesin'
            placeholder='Lives in'
            onChange={handleChange}
            value={formData.livesIn}
          />
          <input
            type='text'
            className='infoInput'
            name='country'
            placeholder='Country'
            onChange={handleChange}
            value={formData.country}
          />
        </div>
        <div>
          <input
            type='text'
            className='infoInput'
            placeholder='RelationShip Status'
            name='relationship'
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>
        <div>
          Profile Image
          <input type='file' name='profileImage' onChange={onImageChange} />
          Cover Image
          <input type='file' name='coverImage' onChange={onImageChange} />
        </div>
        <button className='button infoButton'>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
