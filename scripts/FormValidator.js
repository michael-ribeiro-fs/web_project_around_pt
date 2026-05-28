class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._form = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(
      `.popup__error_type_${inputElement.name}`,
    );

    errorElement.textContent = errorMessage;

    errorElement.classList.add(this._settings.inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(
      `.popup__error_type_${inputElement.name}`,
    );

    errorElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  setEventListeners() {
    const inputList = Array.from(
      this._form.querySelectorAll(this._settings.inputSelector),
    );

    const buttonElement = this._form.querySelector(
      this._settings.submitButtonSelector,
    );

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  resetValidation() {
    const inputList = Array.from(
      this._form.querySelectorAll(this._settings.inputSelector),
    );
    const buttonElement = this._form.querySelector(
      this._settings.submitButtonSelector,
    );
    inputList.forEach((input) => this._hideInputError(input));
    this._toggleButtonState(inputList, buttonElement);
  }
}

export default FormValidator;
