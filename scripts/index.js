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

initialCards.forEach(function (item) {
  console.log(item.name);
});

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
