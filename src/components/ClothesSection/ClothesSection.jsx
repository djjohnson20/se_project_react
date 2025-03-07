import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ clothingItems, handleCardClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes__caption">
        <p className="clothes__text">Your items</p>
        <button className="clothes__button"> + Add New</button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems &&
          clothingItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
