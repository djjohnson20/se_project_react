import { useState, useEffect } from "react";

import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ onClose, isOpen, onLogin, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hasFormContent = () => {
    return email.length > 0 || password.length > 0;
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Log in"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="login-email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="login-email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
          required
          maxLength="50"
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="login-password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
          required
          minLength="8"
        />
      </label>
      <div className="modal__buttons-container">
        <button
          type="submit"
          className={`modal__submit-login ${hasFormContent() ? "active" : ""}`}
        >
          Log in
        </button>
        <button
          type="button"
          className="modal__register-button"
          onClick={onRegister}
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
