import { useState, useEffect } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import { bid } from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import DeleteCardPopup from "./DeleteCardPopup.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState("");
  const [cards, setCards] = useState([]);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleDeleteCardClick() {
    setDeleteCardPopupOpen(true);
  }

  function closeAllPopups(e) {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(info) {
    bid
      .saveUserData(info.name, info.about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) =>
        console.log("Ошибка! Не удалось обновить данные пользователя")
      );
  }

  function handleUpdateAvatar(info) {
    bid
      .changeProfilePic(info.avatar)
      .then((res) => {
        currentUser.avatar = res.avatar;
        closeAllPopups();
      })
      .catch((error) =>
        console.log("Ошибка! Не удалось обновить аватар пользователя")
      );
  }

  function handleClickLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      bid
        .like(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((error) => console.log("Ошибка! Не удалось отправить запрос"));
    } else {
      bid
        .unlike(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((error) => console.log("Ошибка! Не удалось отправить запрос"));
    }
  }
  function handleCardDelete(id) {
    bid
      .deleteCard(id)
      .then(() => {
        const newCards = cards.filter(
          (cardInArr) => cardInArr._id !== id
        );
        setCards((cards) => {
          return newCards;
        });
        closeAllPopups()
      })
      .catch((error) => console.log("Ошибка! Не удалось удалить карточку"));
  }

  function handleAddPlaceSubmit(card) {
    bid
      .postCard(card.name, card.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((error) => console.log("Ошибка! Не удалось создать карточку"));
  }

  useEffect(() => {
    bid
      .getInitialCards()
      .then((res) => {
        setCards(...cards, res);
      })
      .catch((error) => console.log("Ошибка! Не удалось загрузить карточки"));

    bid
      .getUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) =>
        console.log("Ошибка! Не удалось загрузить данные пользователя")
      );
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardDeleteClick={handleDeleteCardClick}
          onCardLike={handleClickLike}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        ></EditAvatarPopup>
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        ></AddPlacePopup>
        <DeleteCardPopup isOpen={isDeleteCardPopupOpen} onClose={closeAllPopups} onCardDelete={handleCardDelete} card={selectedCard}></DeleteCardPopup>
        <ImagePopup onClose={closeAllPopups} card={selectedCard}></ImagePopup>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
