import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

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
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/lago.jpg",
  },
];

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const imagePopup = new PopupWithImage("#image-popup");

const cardSection = new Section(
  { items: initialCards, renderer: createCard },
  ".cards__list",
);

function createCard(item) {
  const card = new Card(item, "#cards__template", (name, link) => {
    imagePopup.open(name, link);
  });

  cardSection.addItem(card.generateCard());
}

const editProfilePopup = new PopupWithForm(
  "#edit-popup",
  ({ name, description }) => {
    userInfo.setUserInfo({ name, job: description });
  },
);

const addCardPopup = new PopupWithForm("#new-card-popup", (formData) => {
  createCard({ name: formData["place-name"], link: formData["link"] });
});

imagePopup.setEventListeners();

editProfilePopup.setEventListeners();

addCardPopup.setEventListeners();

cardSection.renderItems();

const editForm = document.querySelector("#edit-profile-form");
const addCardForm = document.querySelector("#new-card-form");
const editFormValidator = new FormValidator(settings, editForm);
const newCardFormValidator = new FormValidator(settings, addCardForm);

editFormValidator.setEventListeners();

newCardFormValidator.setEventListeners();

const profileEditButton = document.querySelector(".profile__edit-button");

profileEditButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  editForm.querySelector(".popup__input_type_name").value =
    currentUserInfo.name;
  editForm.querySelector(".popup__input_type_description").value =
    currentUserInfo.job;
  editFormValidator.resetValidation();
  editProfilePopup.open();
});

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", () => {
  newCardFormValidator.resetValidation();
  addCardPopup.open();
});
