
// all const
export const page = document.querySelector(".page");
export const cell = page.querySelector("#cell").content;
export const popupCardImg = page.querySelector(".popup-card__image");
export const popupCardTitle = page.querySelector(".popup-card__title");
export const popupShowCard = page.querySelector(".popup-card-section");
export const settings = {
  formElement: ".popup__form",
  inputElement: ".popup__input",
  buttonElement: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button-disable",
  inputErrorClass: "popup__input_show_error",
  errorClass: "popup__form-input-error-active",
  errorElement: ".popup__form-input-error"
};
export const popupForms = page.querySelectorAll(settings.formElement);
export const profileEditButton = page.querySelector(".profile__edit-button");
export const editName = page.querySelector(".popup__input_textbox_name");
export const editProfileDescription = page.querySelector(
  ".popup__input_textbox_description"
);
export const profileName = page.querySelector(".profile__name");
export const profileDescription = page.querySelector(".profile__description");
export const addCardButton = page.querySelector(".profile__add-card");
export const popupCardAdd = page.querySelector(".popup-card-add");
export const grid = page.querySelector(".grid");
export const profileEdit = page.querySelector(".popup-profile-edit");
export const inputs = page.querySelectorAll(".popup__input");
export const errors = page.querySelectorAll(".popup__form-input-error");
export const popups = page.querySelectorAll(".popup");
export const cardForm = page.querySelector("#popup__form-card");
export const popupFormCardSubmitButton = page.querySelector(
  ".popup__submit-button_new-card"
);
export const popupCardAddForm = page.querySelector("#popup__form-card");
export const profileEditDescription = page.querySelector(
  ".popup__input_textbox_description"
);
export const profileEditForm = page.querySelector('#popup__profile-edit')
export const gridCell = cell.querySelector('.grid__cell')
export const popupProfileEditPic = page.querySelector('.popup-change-profile-pic')
export const profileEditPicButton = page.querySelector('.profile__pic-edit')
export const popupDeleteCard = page.querySelector('.popup-delete-card')
export const deleteButton = page.querySelector('.popup__submit-button_delete-card')
export const profileImg = page.querySelector('.profile__pic')
export const popupAvatarForm = page.querySelector('#popup__form-avatar')