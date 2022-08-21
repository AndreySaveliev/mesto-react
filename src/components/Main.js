import React from "react";
import { useEffect, useState } from "react";
import { bid } from "../utils/Api.js";
import Card from "./Card.js";
function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setuserDescription] = useState("");
  const [userAvatar, setuserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    bid.getUser().then((res) => {
      setUserName(...userName, res.name);
      setuserDescription(...userDescription, res.about);
      setuserAvatar(...userAvatar, res.avatar);
    });
  }, []);

  useEffect(() => {
    bid.getInitialCards().then((res) => setCards(...cards, res));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__pic-block">
          <img className="profile__pic" alt="фото профиля" src={userAvatar} />
          <button
            type="button"
            className="profile__pic-edit"
            onClick={() => onEditAvatar()}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={() => onEditProfile()}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-card"
          onClick={() => onAddPlace()}
        ></button>
      </section>
      <section className="grid">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick}></Card>
        ))}
      </section>
    </main>
  );
}

export default Main;
