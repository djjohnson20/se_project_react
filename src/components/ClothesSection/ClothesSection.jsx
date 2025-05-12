import { useContext } from "react";

import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({
  clothingItems,
  handleCardClick,
  handleAddClick,
  onCardLike,
  unlikedItems,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes__caption">
        <p className="clothes__text">Your items</p>
        <button onClick={handleAddClick} className="clothes__button">
          + Add New
        </button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems &&
          clothingItems
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .filter(
              (item) =>
                currentUser &&
                (item.owner._id === currentUser._id ||
                  item.owner === currentUser._id ||
                  item.likes.some((id) => id === currentUser._id) ||
                  unlikedItems.includes(item._id))
            )
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  currentUser={currentUser}
                  onCardLike={onCardLike}
                />
              );
            })}
      </ul>
    </div>
  );
}

export default ClothesSection;
