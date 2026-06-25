import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForms.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__error_visible",
  errorClass: "popup__error",
};

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "f11d5d51-05fd-4a2f-b012-59e641f939f7",
    "Content-Type": "application/json",
  },
});

let userId = null;

const imagePopup = new PopupWithImage("#image-popup");

const confirmPopup = new PopupWithConfirmation("#confirmation-popup");
confirmPopup.setEventListeners();

function createCard(item) {
  const card = new Card(
    item,
    "#cards__template",
    (name, link) => imagePopup.open(name, link),
    confirmPopup,
    api,
    userId,
  );

  const cardElement = card.generateCard();
  cardSection.addItem(cardElement);
  return cardElement;
}

const cardSection = new Section(
  { items: [], renderer: createCard },
  ".cards__list",
);

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userId = userData._id;
    userInfo.setUserInfo({ name: userData.name, job: userData.about });

    document.querySelector(".profile__image").src = userData.avatar;

    cardsData.forEach((card) => createCard(card));
  })
  .catch((err) => {
    console.error("Erro ao carregar dados iniciais:", err);
  });

const editProfilePopup = new PopupWithForm(
  "#edit-popup",
  ({ name, description }) => {
    return api
      .editProfile(name, description)
      .then((updateUser) => {
        userInfo.setUserInfo({ name: updateUser.name, job: updateUser.about });
      })
      .catch((err) => {
        console.error("Erro ao editar perfil: ", err);
        return Promise.reject(err);
      });
  },
);

const addCardPopup = new PopupWithForm("#new-card-popup", (formData) => {
  const name = formData["place-name"];
  const link = formData["link"];

  return api
    .addCard(name, link)
    .then((newCard) => {
      createCard(newCard);
    })
    .catch((err) => {
      console.log("Erro ao adicionar cartão:", err);
      return Promise.reject(err);
    });
});

imagePopup.setEventListeners();

editProfilePopup.setEventListeners();

addCardPopup.setEventListeners();

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

const avatarPopup = new PopupWithForm("#avatar-popup", ({ avatar }) => {
  return api
    .editAvatar(avatar)
    .then((updateUser) => {
      const avatarImage = document.querySelector(".profile__image");
      avatarImage.src = updateUser.avatar;
    })
    .catch((err) => {
      console.log("Erro ao atualizar avatar:", err);
      return Promise.reject(err);
    });
});

avatarPopup.setEventListeners();

const avatarImage = document.querySelector(".profile__avatar-container");
avatarImage.addEventListener("click", () => {
  const avatarForm = document.querySelector("#avatar-form");
  avatarForm.reset();
  if (avatarFormValidator) {
    avatarFormValidator.resetValidation();
  }
  avatarPopup.open();
});

const avatarForm = document.querySelector("#avatar-form");
const avatarFormValidator = new FormValidator(settings, avatarForm);
avatarFormValidator.setEventListeners();

const addCardButton = document.querySelector(".profile__add-button");

addCardButton.addEventListener("click", () => {
  newCardFormValidator.resetValidation();
  addCardPopup.open();
});
