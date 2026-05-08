let initialCards = [
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

const cardTemplate = document.querySelector("#cards__template");
const cardsContainer = document.querySelector(".cards__list");

const popupImage = document.querySelector("#image-popup");
const modalImage = document.querySelector(".popup__image");
const modalLegend = document.querySelector(".popup__caption");
const popupClose = popupImage.querySelector(".popup__close");

popupClose.addEventListener("click", function () {
  closeModal(popupImage);
});

function getCardElement(
  name = "Lugar sem nome",
  link = "./images/placeholder.jpg",
) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("card__like-button_is-active");
  });

  cardDeleteButton.addEventListener("click", function () {
    cardDeleteButton.closest(".card").remove();
  });

  cardImage.addEventListener("click", function () {
    modalImage.src = link;
    modalImage.alt = name;
    modalLegend.textContent = name;
    openModal(popupImage);
  });

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  return cardElement;
}

function renderCard(name, link, cardsContainer) {
  const card = getCardElement(name, link);
  cardsContainer.prepend(card);
}

initialCards.forEach(function (item) {
  renderCard(item.name, item.link, cardsContainer);
});

const newCardPopup = document.querySelector("#new-card-popup");
const addCardButton = document.querySelector(".profile__add-button");
const newCardForm = document.querySelector("#new-card-form");
const cardTitleInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_url");
const closeNewCardPopupButton = document.querySelector(
  "#new-card-popup .popup__close",
);

addCardButton.addEventListener("click", function () {
  openModal(newCardPopup);
});

closeNewCardPopupButton.addEventListener("click", function () {
  closeModal(newCardPopup);
});

function handleCardFormSubmit(event) {
  event.preventDefault();

  const titleInput = cardTitleInput.value;
  const linkInput = cardLinkInput.value;

  renderCard(titleInput, linkInput, cardsContainer);

  closeModal(newCardPopup);

  newCardForm.reset();
}

newCardForm.addEventListener("submit", handleCardFormSubmit);

const editPopup = document.querySelector("#edit-popup");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__description");

const editForm = document.querySelector("#edit-profile-form");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const aboutInput = editPopup.querySelector(".popup__input_type_description");
const closeButton = editPopup.querySelector(".popup__close");

profileEditButton.addEventListener("click", handleOpenEditModal);

closeButton.addEventListener("click", () => closeModal(editPopup));

editForm.addEventListener("submit", handleProfileFormSubmit);

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closeModal(editPopup);
}
