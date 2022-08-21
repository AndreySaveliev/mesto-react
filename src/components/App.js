import { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ card: "", isOpen: false });

  function handleEditAvatarClick() {
    console.log("avatar");
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    console.log("profile");
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    console.log("new place");
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(value) {
    setSelectedCard({ ...selectedCard, card: value, isOpen: true });
    console.log(selectedCard);
  }

  function closeAllPopups(e) {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({ ...selectedCard, card: "", isOpen: false });
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        onClose={closeAllPopups}
        name="profile-edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
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
          />
          <span className="description-error popup__form-input-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        name="card-add"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
      >
        <div className="popup__card-name-input">
          <input
            id="cardname"
            type="text"
            name="name"
            className="popup__input popup__input_card_name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
            autoComplete="off"
          />
          <span className="cardname-error popup__form-input-error"></span>
        </div>
        <div className="popup__card-link-input">
          <input
            id="cardlink"
            type="url"
            name="link"
            className="popup__input popup__input_card_link"
            placeholder="Ссылка на картинку"
            required
            autoComplete="off"
          />
          <span className="cardlink-error popup__form-input-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        name="delete-card"
        title="Вы уверены?"
        buttonText="Да"
      ></PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        name="change-profile-pic"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
      >
        <div className="popup__change-profile-pic-input">
          <input
            id="profilePicLink"
            type="url"
            name="link"
            className="popup__input popup__input_profile_pic"
            placeholder="Ссылка на аватарку"
            required
            autoComplete="off"
          />
          <span className="profilePicLink-error popup__form-input-error"></span>
        </div>
      </PopupWithForm>
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard.card}
        isOpen={selectedCard.isOpen}
      ></ImagePopup>
    </div>
  );
}

export default App;
