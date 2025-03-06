import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal(onClose, isOpen) {
  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      onClick={onClose}
      isOpen={isOpen}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="name"
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label id="hot" className="modal__label modal__label_type_radio">
          <input type="radio" name="weather" className="modal__radio-input" />{" "}
          Hot
        </label>
        <label id="warm" className="modal__label modal__label_type_radio">
          <input type="radio" name="weather" className="modal__radio-input" />{" "}
          Warm
        </label>
        <label id="cold" className="modal__label modal__label_type_radio">
          <input type="radio" name="weather" className="modal__radio-input" />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
