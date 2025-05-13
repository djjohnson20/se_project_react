import { useContext, useState } from "react";

import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import UserAvatar from "../UserAvatar";

function SideBar({ handleLogout, handleEditProfile }) {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  return currentUser ? (
    <div className="sidebar">
      <div className="sidebar__profile">
        <UserAvatar
          avatar={currentUser?.avatar}
          name={currentUser?.name}
          size={56}
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__buttons">
        <button className="sidebar__edit-btn" onClick={handleEditProfileClick}>
          Change profile data
        </button>
        <button className="sidebar__logout" onClick={handleLogout}>
          Log out
        </button>
      </div>
      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        onSubmit={(newProfileData) => {
          handleEditProfile(newProfileData);
          setIsEditProfileModalOpen(false);
        }}
      />
    </div>
  ) : null;
}

export default SideBar;
