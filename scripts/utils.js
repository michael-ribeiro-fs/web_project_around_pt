function openModal(modal) {
  modal.classList.add("popup_is-opened");

  function handleOverlayClick(event) {
    if (event.target === modal) {
      closeModal(modal);
    }
  }

  modal.addEventListener("click", handleOverlayClick);

  modal.handleOverlayClick = handleOverlayClick;

  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modal) {
  if (modal.handleOverlayClick) {
    modal.removeEventListener("click", modal.handleOverlayClick);
    delete modal.handleOverlayClick;
  }

  modal.classList.remove("popup_is-opened");

  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(event) {
  if (event.key === "Escape") {
    const opendPopup = document.querySelector(".popup_is-opened");
    if (opendPopup) {
      closeModal(opendPopup);
    }
  }
}

export { openModal, closeModal, handleEscClose };
