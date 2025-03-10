import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({ activeModal }) {
  return (
    <div className={`modal ${activeModal === "modal_opened"}`}>
      <div className="modal__content modal__content_type_confirm">
        <button className="modal__close" type="button"></button>
        {/* Need to make button close when clicked */}
        <p className="delete__modal-caption">
          Are you sure you want to delete this item? This action is
          irreverssible.
        </p>
        <button type="button" className="delete__modal-delete">
          Yes, delete item
          {/* Need to call api fetch to delete card when clicked */}
        </button>
        <button type="button" className="delete__modal-cancel">
          Cancel
          {/* Need to make button close when clicked */}
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
