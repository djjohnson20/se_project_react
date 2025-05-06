import { useContext } from "react";

import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = card?.owner?._id === currentUser?._id;

  const itemDeleteButtonClassName = `modal__delete-btn ${
    isOwn ? "" : "modal__delete-btn_hidden"
  }`;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close_type_image"
        ></button>
        <img src={card.imageUrl} alt="clothes" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <div className="modal__delete">
            <button
              onClick={onDelete}
              type="button"
              className={itemDeleteButtonClassName}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
