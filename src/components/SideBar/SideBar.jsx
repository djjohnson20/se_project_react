import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import UserAvatar from "../UserAvatar";

function SideBar() {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleLogoutClick = () => {
    setCurrentUser(null);
    navigate("/");
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
        <button className="sidebar__logout" onClick={handleLogoutClick}>
          Log out
        </button>
      </div>
      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        onSubmit={() => {
          setIsEditProfileModalOpen(false);
        }}
        currentUser={currentUser}
      />
    </div>
  ) : null;
}

export default SideBar;
