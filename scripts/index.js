import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openModal, closeModal, handleEscClose } from "./utils.js";

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__error_visible",
  errorClass: "popup__error",
};

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const cardsContainer = document.querySelector(".cards__list");

const popupImage = document.querySelector("#image-popup");
const modalImage = document.querySelector(".popup__image");
const modalLegend = document.querySelector(".popup__caption");
const popupClose = popupImage.querySelector(".popup__close");

const newCardPopup = document.querySelector("#new-card-popup");
const addCardButton = document.querySelector(".profile__add-button");
const newCardForm = document.querySelector("#new-card-form");
const cardTitleInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_url");
const closeNewCardPopupButton = document.querySelector(
  "#new-card-popup .popup__close",
);

const editPopup = document.querySelector("#edit-popup");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__description");
const editForm = document.querySelector("#edit-profile-form");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const aboutInput = editPopup.querySelector(".popup__input_type_description");
const closeButton = editPopup.querySelector(".popup__close");

function setupCloseButtons() {
  popupClose.addEventListener("click", () => closeModal(popupImage));
  closeNewCardPopupButton.addEventListener("click", () =>
    closeModal(newCardPopup),
  );
  closeButton.addEventListener("click", () => closeModal(editPopup));
}

setupCloseButtons();

function handleCardImageClick(name, link) {
  modalImage.src = link;
  modalImage.alt = name;
  modalLegend.textContent = name;
  openModal(popupImage);
}

initialCards.forEach((item) => {
  const card = new Card(item, "#cards__template", handleCardImageClick);
  cardsContainer.prepend(card.generateCard());
});

function handleCardFormSubmit(event) {
  event.preventDefault();

  try {
    const titleInput = cardTitleInput.value;
    const linkInput = cardLinkInput.value;

    const card = new Card(
      { name: titleInput, link: linkInput },
      "#cards__template",
      handleCardImageClick,
    );

    cardsContainer.prepend(card.generateCard());
    closeModal(newCardPopup);
    newCardForm.reset();
  } catch (error) {
    console.error("Erro ao criar cartão:", error);
  }
}

newCardForm.addEventListener("submit", handleCardFormSubmit);

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  editFormValidator.resetValidation();
  openModal(editPopup);
}

profileEditButton.addEventListener("click", handleOpenEditModal);

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closeModal(editPopup);
}

editForm.addEventListener("submit", handleProfileFormSubmit);

const editFormValidator = new FormValidator(settings, editForm);
editFormValidator.setEventListeners();

const newCardFormValidator = new FormValidator(settings, newCardForm);
newCardFormValidator.setEventListeners();

addCardButton.addEventListener("click", () => {
  newCardForm.reset();
  newCardFormValidator.resetValidation();
  openModal(newCardPopup);
});
