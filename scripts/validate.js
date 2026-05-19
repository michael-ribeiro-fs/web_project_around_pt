function showInputError(inputElement, errorMessage) {
  const errorElement = document.querySelector(
    `.popup__error_type_${inputElement.name}`,
  );

  errorElement.textContent = errorMessage;

  errorElement.classList.add("popup__error_visible");
}

function hideInputError(inputElement) {
  const errorElement = document.querySelector(
    `.popup__error_type_${inputElement.name}`,
  );

  errorElement.classList.remove("popup__error_visible");

  errorElement.textContent = "";
}

function checkInputValidity(inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;

    buttonElement.classList.add("popup__button_disabled");
  } else {
    buttonElement.disabled = false;

    buttonElement.classList.remove("popup__button_disabled");
  }
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));

  const buttonElement = formElement.querySelector(".popup__button");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      checkInputValidity(inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  formList.forEach(function (formElement) {
    setEventListeners(formElement);
  });
}

function resetValidation(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");

  inputList.forEach(function (inputElement) {
    hideInputError(inputElement);
  });

  toggleButtonState(inputList, buttonElement);
}

enableValidation();
