import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({
  activeModal,
  onClose,
  card,
  handleCardDelete,
}) {
  return (
    <div className={`modal ${activeModal === "delete" ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_confirm">
        <button
          onClick={onClose}
          className="modal__close"
          type="button"
        ></button>
        <p className="delete__modal-caption">
          Are you sure you want to delete this item?
        </p>
        <p className="delete__modal-caption-confirmation">
          This action is irreversible.
        </p>
        <button
          onClick={() => handleCardDelete(card._id)}
          type="button"
          className="delete__modal-delete"
        >
          Yes, delete item
        </button>
        <button
          onClick={onClose}
          type="button"
          className="delete__modal-cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
