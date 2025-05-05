import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import UserAvatar from "../UserAvatar";

function Header({
  handleAddClick,
  weatherData,
  handleRegisterClick,
  handleLoginClick,
  isLoggedIn,
  handleLogout,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Header Logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__controls">
        <ToggleSwitch />
        {!isLoggedIn ? (
          <>
            <button
              onClick={handleRegisterClick}
              type="button"
              className="header__sign-up-btn"
            >
              Sign up
            </button>
            <button
              onClick={handleLoginClick}
              type="button"
              className="header__sign-in-btn"
            >
              Log in
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleLogout}
              type="button"
              className="header__logout-btn"
            >
              Log out
            </button>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add Clothes
            </button>
          </>
        )}
      </div>
      {isLoggedIn && (
        <Link to="/profile" className="header__link">
          <div className="header__user-container">
            <p className="header__username">{currentUser.name}</p>
            <UserAvatar
              avatar={currentUser.avatar}
              name={currentUser.name}
              size={40}
            />
          </div>
        </Link>
      )}
    </header>
  );
}

export default Header;
