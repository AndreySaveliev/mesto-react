import React from "react";
import { useEffect, useState, useContext } from "react";
import { bid } from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "./CurrentUserContext.js";
function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardDelete,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__pic-block">
          <img
            className="profile__pic"
            alt="фото профиля"
            src={currentUser.avatar}
          />
          <button
            type="button"
            className="profile__pic-edit"
            onClick={() => onEditAvatar()}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={() => onEditProfile()}
            ></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-card"
          onClick={() => onAddPlace()}
        ></button>
      </section>
      <section className="grid">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            currentUser={currentUser}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          ></Card>
        ))}
      </section>
    </main>
  );
}

export default Main;
