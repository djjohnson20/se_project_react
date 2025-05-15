import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLikeClick = () => {
    onCardLike(item);
  };

  const isLiked = item.likes
    ? item.likes.some((id) => id === currentUser?._id)
    : false;

  return (
    <li className="card">
      <div className="card__name-container">
        <h2 className="card__name">{item.name}</h2>
        {currentUser?._id && (
          <button
            className={`card__like-button ${
              isLiked ? "card__like-button_active" : ""
            }`}
            onClick={handleLikeClick}
          ></button>
        )}
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
