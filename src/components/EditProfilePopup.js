import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen]);

  function handleChange(event) {
    if (event.target.name == "name") {
      setName(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      onClose={onClose}
      name="profile-edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="popup__name-input">
        <input
          id="name"
          name="name"
          className="popup__input popup__input_textbox_name"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          autoComplete="off"
          value={name}
          defaultValue={currentUser.name}
          onChange={handleChange}
        />
        <span className="name-error popup__form-input-error"></span>
      </div>
      <div className="popup__description-input">
        <input
          id="description"
          name="description"
          className="popup__input popup__input_textbox_description"
          type="text"
          placeholder="Описание профиля"
          minLength="2"
          maxLength="200"
          autoComplete="off"
          value={description}
          defaultValue={currentUser.about}
          onChange={handleChange}
        />
        <span className="description-error popup__form-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
