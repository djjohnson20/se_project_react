import { useContext } from "react";

import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import UserAvatar from "../UserAvatar";

function SideBar() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar"
        src={currentUser.avatar}
        alt={currentUser.avatar}
      />
      <p className="sidebar__username">{currentUser.name}</p>
    </div>
  );
}

export default SideBar;
