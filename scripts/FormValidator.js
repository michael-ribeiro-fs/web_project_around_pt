class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._form = formElement;
    this._inputList = Array.from(
      this._form.querySelectorAll(this._settings.inputSelector),
    );
    this._buttonElement = this._form.querySelector(
      this._settings.submitButtonSelector,
    );
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

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  setEventListeners() {
    this._toggleButtonState(); // não passa parâmetros

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(); // não passa parâmetros
      });
    });
  }

  resetValidation() {
    this._inputList.forEach((input) => this._hideInputError(input));
    this._toggleButtonState();
  }
}

export default FormValidator;
