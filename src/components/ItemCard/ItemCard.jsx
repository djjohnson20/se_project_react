import "./ItemCard.css";
import likeButtonInactive from "../../assets/unlikedbutton.svg";
import likeButtonActive from "../../assets/likedbutton.svg";

function ItemCard({ item, onCardClick, onCardLike, currentUser }) {
  console.log("ItemCard props:", {
    item,
    currentUser,
    "has onCardLike": !!onCardLike,
  });
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLikeClick = () => {
    console.log("Like button clicked");
    console.log("item.likes:", item.likes);
    onCardLike(item);
  };

  const isLiked = item.likes
    ? item.likes.some((id) => id === currentUser?._id)
    : false;

  console.log("Debug values:", {
    "currentUser?._id": currentUser?._id,
    "item.likes": item.likes,
  });

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      {currentUser?._id && (
        <img
          src={isLiked ? likeButtonActive : likeButtonInactive}
          className="card__like-button"
          onClick={handleLikeClick}
          alt="like button"
        />
      )}
    </li>
  );
}

export default ItemCard;
