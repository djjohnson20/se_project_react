import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function AddItemModal({ onClose, isOpen, onAddItemModalSubmit }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weather });
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="name"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          onChange={handleImageUrlChange}
          value={imageUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label id="hot" className="modal__label modal__label_type_radio">
          <input
            value="hot"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
            type="radio"
            name="weather"
            className="modal__radio-input"
          />{" "}
          Hot
        </label>
        <label id="warm" className="modal__label modal__label_type_radio">
          <input
            value="warm"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
            type="radio"
            name="weather"
            className="modal__radio-input"
          />{" "}
          Warm
        </label>
        <label id="cold" className="modal__label modal__label_type_radio">
          <input
            value="cold"
            onChange={handleWeatherChange}
            checked={weather === "cold"}
            type="radio"
            name="weather"
            className="modal__radio-input"
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
